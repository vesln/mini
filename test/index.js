var cli = require('nixt');
var join = require('path').join;
var mini = join(__dirname, '..', 'bin', 'mini') + ' ';
var cwd = join(__dirname, '..');

test('Passing tests', function(done) {
  cli()
  .cwd(cwd)
  .base(mini)
  .stdout(/OK/)
  .code(0)
  .run('test/fixtures/passing.js')
  .end(done);
});

test('Failing tests', function(done) {
  cli()
  .cwd(cwd)
  .base(mini)
  .run('test/fixtures/failing.js')
  .stderr(/NOT OK/)
  .code(2)
  .end(done);
});
