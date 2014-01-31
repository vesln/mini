/**
 * Dependencies.
 */

var hydro = require('hydro');
var color = require('eyehurt');

/**
 * Primary export.
 */

module.exports = function() {
  var runner = hydro();
  var failed = [];
  var total = 0;
  var suite = null;

  runner.on('post:test', function(test) {
    if (test.status === 'failed') failed.push(test);
    total++;
  });

  process.nextTick(function() {
    runner.run(function() {
      console.log('Tests: %d\n', total);

      if (!failed.length) {
        console.log(color('OK', 'green'));
        process.exit();
      }

      failed.forEach(function(test) {
        console.error('Test: %s', test.title);
        console.error(test.error.stack);
        console.error();
      });

      console.error(color('NOT OK', 'red'));
      process.exit(failed.length);
    });
  });

  suite = runner.addSuite('mini');

  return function() {
    var test = runner.createTest.apply(runner, arguments);
    suite.addTest(test);
    return test;
  };
};
