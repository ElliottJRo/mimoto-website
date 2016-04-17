'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var runSquence = require('run-sequence');
var webpack = require('webpack-stream');
var del = require('del');
var wiredep = require('wiredep');

module.exports = function(options) {
  gulp.task('build', function() {
    return runSquence(['static-assets:dist',
    'partials:dist',
    'pages:dist',
    'layouts:dist',
    'content:dist',
    'meta:dist',
    'styles:dist',
    'images:dist']);
  });

};
