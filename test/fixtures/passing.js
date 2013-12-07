var t = require('../..')();

t('OK', function() {

});

t('OK async', function(done) {
  process.nextTick(done);
});
