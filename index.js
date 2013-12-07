/**
 * External dependencies.
 */

var Hydro = require('hydro');

/**
 * Primary export.
 */

module.exports = function() {
  var runner = new Hydro;
  var failed = [];
  var total = 0;

  runner.on('post:test', function(test) {
    if (test.failed) failed.push(test);
    total++;
  });

  process.nextTick(function() {
    runner.run(function() {
      console.log('Tests: %d\n', total);

      if (!failed.length) {
        console.log('ok');
        process.exit();
      }

      failed.forEach(function(test) {
        console.error('Test: %s', test.title);
        console.error(test.error.stack);
        console.error();
      });

      console.error('not ok');
      process.exit(failed.length);
    });
  });

  runner.addSuite('mini');

  return function() {
    runner.addTest.apply(runner, arguments);
  };
};
