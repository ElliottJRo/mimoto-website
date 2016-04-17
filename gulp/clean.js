'use strict';

var gulp = require('gulp');
var runSquence = require('run-sequence');

var del = require('del');

module.exports = function(options) {

    gulp.task('clean', function (done) {
        return del([options.dist + '/*',
            '!'+options.dist+'/theme.yaml'], done);
    });

    gulp.task('clean:tmp', function (done) {
        return del([options.tmp + '/'], done);
    });

    gulp.task('clean:js', function (done) {
        return del([options.tmp + '/**/*.js'], done);
    });

};