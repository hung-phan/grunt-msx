'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var msx = require('msx');

exports.msx = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  app: function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/fixtures/example.jsx');
    var expected = grunt.file.read('test/expected/example.js');
    test.equal(msx.transform(actual), expected, 'should describe what the default behavior is.');

    test.done();
  },
  test: function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/fixtures/test.jsx');
    var expected = grunt.file.read('test/expected/test.js');
    test.equal(msx.transform(actual), expected, 'should describe what the default behavior is.');

    test.done();
  },
};
