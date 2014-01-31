var t = require('..')();
var cli = require('nixt');

t('Passing tests', function(done) {
  cli()
  .run('node test/fixtures/passing')
  .stdout(/Tests: 2/)
  .stdout(/OK/)
  .code(0)
  .end(done);
});

t('Failing tests', function(done) {
  cli()
  .run('node test/fixtures/failing')
  .stdout(/Tests: 2/)
  .stderr(/NOT OK/)
  .code(2)
  .end(done);
});
