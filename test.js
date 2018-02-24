'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var filterKeys = require('./')

/*!
 * fixtures.
 */

var object = {
  id: {
    required: false
  },

  title: {
    required: true
  },

  body: {
    required: true
  }
}

function byValue (value, _key, _object) {
  return value.required
}

function byKey (_value, key, _object) {
  return /^(title|body)$/i.test(key)
}

/*!
 * tests.
 */

test('filterKeys()', function (t) {
  var onValue = filterKeys(byValue)
  var onKey = filterKeys(byKey)

  t.deepEqual(onValue(object), ['title', 'body'], 'filter on value (partial application)')
  t.deepEqual(filterKeys(byValue, object), ['title', 'body'], 'filter on value')

  t.deepEqual(onKey(object), ['title', 'body'], 'filter on key (partial application)')
  t.deepEqual(filterKeys(byKey, object), ['title', 'body'], 'filter on key')

  t.equal(onValue.length, 1, 'when partially applied, a unary function is returned.')

  t.end()
})
