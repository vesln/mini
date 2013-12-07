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

ok
```

## Installation

```bash
npm install mini
```

## Tests

```bash
$ npm test
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
