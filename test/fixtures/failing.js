test('NOT OK sync', function() {
  throw new Error('fail');
});

test('NOT OK async', function(done) {
  done(new Error('fail'));
});
