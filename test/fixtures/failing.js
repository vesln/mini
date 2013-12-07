var t = require('../..')();

t('NOT OK sync', function() {
  throw new Error('fail');
});

t('NOT OK async', function(done) {
  done(new Error('fail'));
});
