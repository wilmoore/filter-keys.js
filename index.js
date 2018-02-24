'use strict'

/*!
 * imports.
 */

var assert = require('assert')
var curry2 = require('curry2')

/*!
 * exports.
 */

module.exports = curry2(filterKeys)

/**
 * For each element in source `object` apply `iteratee` to (key, value, object).
 * Include key in result array where return value is `true`
 *
 * @param {Object} object
 * Source object.
 *
 * @param {Function} iteratee
 * Iteratee function.
 */

function filterKeys (iteratee, object) {
  assert(typeof iteratee === 'function', 'expected `iteratee` to be a function')

  var keys = []

  for (var key in object) {
    if (iteratee(object[key], key, object) === true) keys.push(key)
  }

  return keys
}
