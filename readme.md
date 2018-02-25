# filter-keys
> For each element in source `object` apply `iteratee` to (value, key, object). Include key in result array where return value is `true`.

[![Build Status](http://img.shields.io/travis/wilmoore/filter-keys.js.svg)](https://travis-ci.org/wilmoore/filter-keys.js) [![Code Climate](https://codeclimate.com/github/wilmoore/filter-keys.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/filter-keys.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

###### yarn

```shell
yarn add filter-keys
```

###### npm

```shell
npm install filter-keys --save
```

> You may also [directly download a release](https://github.com/wilmoore/filter-keys.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/filter-keys.js.svg)](https://www.npmjs.org/package/filter-keys.js) [![NPM downloads](http://img.shields.io/npm/dm/filter-keys.js.svg)](https://www.npmjs.org/package/filter-keys.js) [![Dependency Status](https://gemnasium.com/wilmoore/filter-keys.js.svg)](https://gemnasium.com/wilmoore/filter-keys.js)

## Features

- Partial application is directly supported via [currying] (no need for `Function.prototype.bind`).
- ES3, ES5, CommonJS, AMD, and legacy-global compatible.
- Haskell style [Parameter Order] (allows for [pointfree programming style]).

## API Example

###### require

```js
var filterKeys = require('filter-keys')
```

###### full application

```js
var object = {
  id: { required: false },
  title: { required: true },
  body: { required: true },
}

filterKeys(function (val) { return val.required }, object)
//=> [ 'title', 'body' ]
```

###### partial application

```js
var object = {
  id: { required: false },
  title: { required: true },
  body: { required: true },
}

var filter = filterKeys(function (val) {
  return val.required
})

filter(object)
//=> [ 'title', 'body' ]
```

## API

### `filterKeys(iteratee, object)`

###### arguments

 - `iteratee: (Function)` iteratee function; applied to (value, key, object).

 - `object: (Object)` source object.

###### returns

 - `(Function|[])` If partially applied, return unary function, otherwise, return result of full application.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/filter-keys.js.svg)](https://github.com/wilmoore/filter-keys.js/blob/master/license)

[currying]: https://en.wikipedia.org/wiki/Currying
[Parameter Order]: https://wiki.haskell.org/Parameter_order
[pointfree programming style]: https://medium.com/@wilmoore/un-bind-your-js-with-curry-a8657a4138cb#.v81fxc79y
