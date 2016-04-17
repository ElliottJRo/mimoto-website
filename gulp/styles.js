'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('styles', function () {
    var sassOptions = {
      style: 'expanded'
    };
    var injectFiles = gulp.src([
      options.src + '/styles/**/*.scss',
      '!' + options.src + '/styles/theme.scss',
      '!' + options.src + '/styles/careers.scss'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src, '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter(['careers.scss'], {restore: true});
    var vendorFilter = $.filter(['theme.scss'], {restore: true});

    return gulp.src([
      options.src + '/styles/theme.scss',
      options.src + '/styles/careers.scss'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore)
      .pipe(vendorFilter)
      .pipe(wiredep(options.wiredep))
      .pipe(vendorFilter.restore)
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/css/'))
      .pipe(browserSync.reload({ stream: true }));

    });


    gulp.task('styles:dist', function () {
      var sassOptions = {
        style: 'expanded'
      };
      return gulp.src([
        options.src + '/styles/theme.scss',
        options.src + '/styles/careers.scss'
      ])
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(options.dist + '/assets/css/'))
        .pipe(browserSync.reload({ stream: true }));

      });

};
