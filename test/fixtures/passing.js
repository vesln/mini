test('OK sync', function() {

});

test('OK async', function(done) {
  process.nextTick(done);
});
