/*
 * grunt-msx
 * https://github.com/hung-phan/grunt-msx
 *
 * Copyright (c) 2014 Hung Quang Phan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var chalk = require('chalk');
  var msx = require('msx');

  grunt.registerMultiTask('msx', 'Precompile Mithril views which use JSX into JavaScript by insin', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        // no option for now
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + chalk.red(filepath) + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        console.log(file)
        console.log(filepath)
        var src = grunt.util.normalizelf(msx.transform(grunt.file.read(filepath)));
        var path = file.dest.replace('jsx', 'js');

        // Write the destination file.
        grunt.file.write(path, src);

        // Print a success message.
        return grunt.log.writeln('File "' + chalk.cyan(path) + '" created.');
      });
    });
  });

};
