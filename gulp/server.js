'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var util = require('util');

module.exports = function(options) {

  //var _middleware = middleware(options);
  /**
   * Starts a browser sync server AND a PHP server so we can handle
   *  php stuff without manually starting it ourselves
   */
  function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if(baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
      routes = {
        '/bower_components': 'bower_components'
      };
    }

    var server = {
      baseDir: baseDir,
      routes: routes
    };

    // if(_middleware.length > 0) {
    //   server.middleware = _middleware;
    // }

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      browser: browser,
      notify: false
    });


  //   portfinder.getPort(function (err, port) {
   //
  //     var serverPort = port;
   //
  //     console.log('Starting PHP server on port ' + serverPort);
  //     options.phpPort = serverPort;
  //     php.server({ base: '.', port: serverPort, open: false, keepalive: true});
  //  });

  }

  gulp.task('serve', ['watch'], function () {
    browserSyncInit([options.tmp, options.src, '.']);
  });

  // No production ready serve yet
  //
  // gulp.task('serve:dist', ['build'], function () {
  //   browserSyncInit(options.dist);
  // });

};
