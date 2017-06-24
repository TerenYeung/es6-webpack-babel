
var slice = Array.prototype.slice;

/**
 * Execute the generator function
 * and return promise
 * 
 * @param {Function} Gen 
 * @return {Promise}
 * @api publick
 */

function co(Gen) {

}

/**
 * Convert a `yield`ed value into a promise
 * 
 * @param {any} obj 
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if(!obj) return obj;
  if(isPromise(obj)) return obj;
  if(isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if('function' == typeof obj) return thunkToPromise.call(this, obj);
  if(Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if(isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to promise
 * 
 * @param {any} fn 
 */
function thunkToPromise(fn) {
  var ctx = this;
  return new Promise((resolve, reject) => {
    fn.call(ctx, (err, data)=>{
      if(err) return reject(err)
      if(arguments.length > 2) data = slice.call(arguments, 1);
      resolve(data)
    })
  })
}


// arrayToPromise和objectToPromise是用于处理并发的异步操作时，
// 将放在对象或是数组的并发操作封装为Promise

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

// var Gen1 = function* (){
//   var res = yield {
//     1: Promise.resolve(1),
//     2: Promise.resolve(2),
//   }
//   log(res)
// }
// co(Gen1)

// 这块看不太懂 ？？？
function objectToPromise(obj){
  // results = {}
  var results = new obj.constructor();
  // keys = [1,2]
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    // key = 1
    var key = keys[i];
    
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayname ) return true;
  return isGenerator(constructor.prototype)
}

function isGenerator(obj) {
  return 'function' === typeof obj.next && 'function' === typeof obj.throw;
}

function isObject(obj) {
  return Object === obj.constructor;
}