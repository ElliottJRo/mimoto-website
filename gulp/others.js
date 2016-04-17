'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('static-assets', function() {
    return gulp.src(options.src + '/assets/{vendor,javascript,videos,fonts}/**/*')
      .pipe(gulp.dest(options.tmp + '/assets/'))
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.task('partials', function() {
    return gulp.src(options.src + '/partials/**/*.htm')
      .pipe(gulp.dest(options.tmp + '/partials/'))
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.task('pages', function() {
    return gulp.src(options.src + '/pages/**/*.htm')
      .pipe(gulp.dest(options.tmp + '/pages/'))
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.task('content', function() {
    return gulp.src(options.src + '/content/**/*.htm')
      .pipe(gulp.dest(options.tmp + '/content/'))
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.task('layouts', function() {
    return gulp.src(options.src + '/layouts/**/*.htm')
      .pipe(gulp.dest(options.tmp + '/layouts/'))
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.task('meta', function() {
    return gulp.src(options.src + '/meta/**/*.yaml')
      .pipe(gulp.dest(options.tmp + '/meta/'))
      .pipe(browserSync.reload({ stream: true }));
  });

  /**
   * Prod Build Tasks
   */
   gulp.task('static-assets:dist', function() {
     return gulp.src(options.src + '/assets/{vendor,javascript,videos,fonts}/**/*')
       .pipe(gulp.dest(options.dist + '/assets/'))
       .pipe(browserSync.reload({ stream: true }));
   });
   gulp.task('partials:dist', function() {
     return gulp.src(options.src + '/partials/**/*.htm')
       .pipe(gulp.dest(options.dist + '/partials/'))
       .pipe(browserSync.reload({ stream: true }));
   });
   gulp.task('pages:dist', function() {
     return gulp.src(options.src + '/pages/**/*.htm')
       .pipe(gulp.dest(options.dist + '/pages/'))
       .pipe(browserSync.reload({ stream: true }));
   });
   gulp.task('layouts:dist', function() {
     return gulp.src(options.src + '/layouts/**/*.htm')
       .pipe(gulp.dest(options.dist + '/layouts/'))
       .pipe(browserSync.reload({ stream: true }));
   });
   gulp.task('content:dist', function() {
     return gulp.src(options.src + '/content/**/*.htm')
       .pipe(gulp.dest(options.dist + '/content/'))
       .pipe(browserSync.reload({ stream: true }));
   });
   gulp.task('meta:dist', function() {
     return gulp.src(options.src + '/meta/**/*.yaml')
       .pipe(gulp.dest(options.dist + '/meta/'))
       .pipe(browserSync.reload({ stream: true }));
   });

};
