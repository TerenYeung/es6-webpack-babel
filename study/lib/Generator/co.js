'use strict';

/**
 * Execute the generator function
 * and return promise
 * 
 * @param {Function} Gen 
 * @return {Promise}
 * @api publick
 */

function co(Gen) {}

/**
 * Convert a `yield`ed value into a promise
 * 
 * @param {any} obj 
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

function isGeneratorFunction(obj) {}