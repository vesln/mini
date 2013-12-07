var t = require('../..')();

t('NOT OK', function() {
  throw new Error('fail');
});

t('NOT OK', function(done) {
  done(new Error('fail'));
});
