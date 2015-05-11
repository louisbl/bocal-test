var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  less: {
    autoprefixer: {
      browsers: ['last 2 version']
    },
    cssSrc: './vendor/css/*.css',
    src: [src + '/index.less',
      dest + '/*.less'
    ],
    dest: dest
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: [src + '/index.html',
      src + '/htdocs/**'
    ],
    dest: dest
  },
  fonts: {
    src: src + '/fonts/**',
    dest: dest
  },
  sprite: {
    src: src + '/icons/*.png',
    destStyle: dest,
    destImage: dest + '/images',
    options: {
      base64: false,
      name: 'sprite',
      style: 'sprite.less',
      cssPath: './images',
      processor: 'less'
    }
  },
  iconFont: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    lessDest: dest,
    template: './gulp/tasks/iconFont/template.less.swig',
    lessOutputName: 'icons.less',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      debug: true,
      paths: src,
      entries: src + '/index.js',
      dest: dest,
      outputName: 'index.js',

      external: ['jquery',
        'lodash',
        'backbone',
        'backbone-metal',
        'backbone.radio',
        'backbone.storage',
        'backbone.base-router',
        'backbone.base-router/node_modules/underscore',
        'bluebird',
        'debug',
        'handlebars',
        'marionette.toolkit',
        'backbone.marionette'
      ]
    }, {
      debug: true,
      entries: src + '/plugins.js',
      dest: dest,
      outputName: 'plugins.js',

      require: ['jquery',
        'lodash',
        'backbone',
        'backbone-metal',
        'backbone.radio',
        'backbone.storage',
        'backbone.base-router',
        'backbone.base-router/node_modules/underscore',
        'bluebird',
        'debug',
        'handlebars',
        'marionette.toolkit',
        'backbone.marionette'
      ]
    }]
  },
  vendorJs: {
    src: ['./vendor/js/*js',
      dest + '/plugins.js'
    ],
    dest: dest,
    destName: 'vendor.js'
  },
  vendorCss: {
    src: ['./vendor/css/*css'],
    dest: dest,
    destName: 'vendor.css'
  }
};
