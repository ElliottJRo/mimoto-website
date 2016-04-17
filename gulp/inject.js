'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['styles'], function () {

    var injectStyles = gulp.src([
      options.tmp + '/css/*.css',
      '!' + options.tmp + '/vendor.css'
    ], { read: false });

    var injectScripts = gulp.src([
      options.tmp + '/**/*.js',
      '!' + options.src + '/**/*.spec.js',
      '!' + options.src + '/**/*.mock.js'
    ])

    var injectOptions = {
      ignorePath: [options.src, options.tmp],
      addRootSlash: true
    };

    // We only need to inject the styles and scripts into our layouts html
    return gulp.src(options.src + '/index.html')
      .pipe($.inject(injectStyles, injectOptions))
      // .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp));

  });

  // gulp.task('inject:js', ['scripts'], function () {
  //
  //   var injectScripts = gulp.src([
  //     options.tmp + '/**/*.js',
  //     '!' + options.src + '/**/*.spec.js',
  //     '!' + options.src + '/**/*.mock.js'
  //   ])
  //
  //   var injectOptions = {
  //     ignorePath: [options.src, options.tmp],
  //     addRootSlash: true
  //   };
  //
  //   return gulp.src(options.src + '/layouts/*.htm')
  //     .pipe($.inject(injectScripts, injectOptions))
  //     .pipe(wiredep(options.wiredep))
  //     .pipe(gulp.dest(options.tmp + '/layouts/'));
  //
  // });
};
