'use strict';

var fn = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fn(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _console = console,
    log = _console.log;
// const fs = require('fs')

var co = require('co'
// what is the async ?
// async就是Generator的语法糖

// Generator进行异步操作
// var readFile = function(filename) {
//   return new Promise((resolve, reject)=>{
//     fs.readFile(filename, (err, data)=>{
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
// }

// var Gen = function* () {
//   var f1 = yield readFile('src/files/book.md')
//   log(f1.toString())
//   var f2 = yield readFile('src/files/hello.txt')
//   log(f2.toString())
// }

// co(Gen)

// Async函数进行异步操作
// var asyncReadFile = async function(){
//   var f1 = await readFile('src/files/book.md')
//   var f2 = await readFile('src/files/hello.txt')
//   log(f1.toString())
//   log(f2.toString())
// }
// var result = asyncReadFile()
// result.then(()=>{
//   log('async is finished')
// })

// Generator and async的联系与区别
/* 
  const Gen = function*(){
    var r1 = yield readFile(filename)
    var r2 = yield readFile(filename)
  }
  co(Gen)
*/
/**
 * const asyncReadFile = async function() {
 *  var f1 = await readFile(filename)
 *  var f2 = await readFile(filename)
 * }
 * var result = asyncReadFile()
 */
// var asyncReadFile = async function(){
//   var [f1, f2] = await Promise.all([readFile('src/files/book.md'),readFile('src/files/hello.txt')])
//   log(f1.toString())
//   log(f2.toString())
// }

// var result = asyncReadFile()
// result.then(()=>{
//   log('async is finished')
// })

// async的实现原理
// 就是将Generator函数和自动执行器，包装在一个函数里
);