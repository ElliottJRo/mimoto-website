'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSquence = require('run-sequence');

module.exports = function(options) {
  gulp.task('watch',
  ['static-assets', 'inject', 'images'],
  function () {

    gulp.watch([options.src + '/assets/{vendor,javascript,videos,fonts}/**/*'], function(event) {
      gulp.start('static-assets');
      browserSync.reload(event.path);
    });

    gulp.watch([options.src + '/assets/images/**/*'], function(event) {
      gulp.start('images');
      browserSync.reload(event.path);
    });

    gulp.watch([
      options.src + '/index.html'
    ], function(event) {
      gulp.start('inject');
      browserSync.reload(event.path);
    });

    gulp.watch([
      options.src + '/styles/**/*.scss'
    ], function(event) {
      gulp.start('styles');
    });

  });
};
