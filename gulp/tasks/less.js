var gulp         = require('gulp');
var concat       = require('gulp-concat');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCSS    = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').less;
var reload = require('../util/bs').reload;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', ['iconFont', 'sprite'], function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concat(config.outputName))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});
