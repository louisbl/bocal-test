var gulp = require('gulp');
var concat = require('gulp-concat');
var newer = require('gulp-newer');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var configJs = require('../config').vendorJs;
var configCss = require('../config').vendorCss;

gulp.task('vendorJs', ['browserify'], function() {
  return gulp.src(configJs.src)
    .pipe(newer(configJs.dest + '/' + configJs.destName))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(concat(configJs.destName))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configJs.dest));
});

gulp.task('vendorCss', function() {
  return gulp.src(configCss.src)
    .pipe(newer(configCss.dest + '/' + configCss.destName))
    .pipe(sourcemaps.init())
    .pipe(concat(configCss.destName))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configCss.dest));
});

gulp.task('vendor', ['vendorJs', 'vendorCss']);
