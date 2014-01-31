[![Build Status](https://secure.travis-ci.org/vesln/mini.png)](http://travis-ci.org/vesln/mini)

# mini

Mini, node-able test runner, created to showcase the abilities of
[Hydro](https://github.com/hydrojs/hydro)

## Usage

```js
// my-test.js

var t = require('mini')();

t('Sync test', function() {
  // do sync stuff
});

t('Async test', function(done) {
  // do async stuff
  done();
});
```

Then:

```
$ node my-test.js
```

Output:

```
Tests: 2

OK
```

## Installation

```bash
npm install mini
```

## License

MIT
