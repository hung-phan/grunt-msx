/**
 * Module Dependencies
 * Reference
 * By https://github.com/ericclemmons/grunt-react/blob/master/lib/transformers.js
 */

var path      = require('path');
var transform = require('msx').transform;
var through   = require('through');

/**
 * Exports
 */

var Transformers = {};

Transformers.source = transform;

Transformers.browserify = function(file) {
  var source  = '';

  return through(function(data) {
    source += data;
  }, function() {
    var result;

    try {
      result = Transformers.source(source);
    } catch (error) {
      error.message += ' in "' + file + '"';

      this.emit('error', error);
    }

    this.queue(result);
    this.queue(null);
  });
};

module.exports = Transformers;
