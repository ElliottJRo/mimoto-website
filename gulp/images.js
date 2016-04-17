'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('images', function() {

    // We can potentially add in image minifyer here

    return gulp.src(options.src + '/assets/images/**/*')
      .pipe(gulp.dest(options.tmp + '/assets/images/'))
      .pipe(browserSync.reload({ stream: true }));
  });

  gulp.task('images:dist', function() {
    return gulp.src(options.src + '/assets/images/**/*')
      .pipe(gulp.dest(options.dist + '/assets/images/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
