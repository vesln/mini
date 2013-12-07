var t = require('../..')();

t('OK sync', function() {

});

t('OK async', function(done) {
  process.nextTick(done);
});
