'use strict';

// Generator函数式一个状态机，封装多个内部状态

// 执行Generator返回一个Iterator，即Generator还是一个遍历器对象生成函数
var _console = console,
    log = _console.log;

var fs = require('fs');
var thunkify = require('thunkify');
var co = require('co'
// function* Gen() {
//   yield 'hello'
//   yield 'world'
//   return 'end'
// }

// let gen = Gen()
// for (let value of gen) {
//   log(value)
// }

// Generator函数是遍历器生成函数，因此可以把Generator赋值给对象的Symbol.iterator属性
// 使得该对象具有Iterator接口

// let obj = {
//   * [Symbol.iterator]() {
//     yield 1
//     yield 2
//     yield 3
//   }
// }

// log([...obj])

// yield表达式总是返回undefined
// 调用gen的next方法，该方法带上一个参数，可以作为上一个yield表达式的返回值

// 通过yield向外部传值
// 通过next(params)向内传值

// function* Gen2() {
//   let result = yield 'hello'
//   log(result)
// }
// let gen2 = Gen2()
// gen2.next()
// gen2.next('world')

// Generator与协程
// Generator函数式协程在ES6的实现
// 协程就是多个线程互相协作，完成异步任务
// 协程A开始执行，协程A执行到一半，进入暂停，执行权转移到协程B
// 协程B开始工作，一段时间后，协程B交还执行权给协程A
// 协程A恢复执行

/**
 * 一个Generator调用后返回一个遍历器对象
 * 调用Gen.next()后会执行一段任务直到遇到yield后返回当前阶段的信息
 * 当前阶段的信息为一个对象{ value: xxx, done: false}
 * 其中value是从yield表达式获取的值，done表示的是是否存在下一阶段
 */

// 自动执行Generator函数--Thunk函数
// 参数的求值策略：1. 传名调用 2. 传值调用

// 传名调用
// let x = 1;
// function name(p){
//   return p+5
// }
// name(x+5)
// as (x+5)+5

// 传值调用
// as 6+5

// 编译器的传名调用的实现

// 将参数放到一个临时的函数，再将这个临时函数传入函数体，这个临时函数就是Thunk函数

// function f(m) {
//   return m*2
// }
// f(x+5)

// var thunk = function(){
//   return x+5
// }

// function f(thunk) {
//   return thunk()*2
// }

// Thunk函数本质上就是将参数封装在一个名叫thunk的函数中，该函数返回该参数

// JS的Thunk是将多个参数替换成一个只接受回调函数作为参数的单参数函数

// 多参数
// const fs = require('fs')

// fs.readFile(filename, callback)

// var thunk = function(filename) {
//   return function(callback) {
//     return fs.readFile(filename, callback)
//   }
// }

// var readFileThunk = thunk(filename)

// readFileThunk(callback)

//thunk(filename)(callback)

// 任何函数，只要参数有回调函数，就可以写成Thunk函数形式

// es5
// var Thunk = function(fn) {
//   return function(){
//     // 第一次执行封装Thunk后的函数，将filename 推入数组
//     var args = Array.prototype.slice.call(arguments)
//     return function(callback) {
//       // 第二次执行函数，将callback也推入args
//       args.push(callback)
//       return fn.apply(this, args)
//     }
//   }
// }
// es6
// const Thunk = function(fn) {
//   return function(...args) {
//     return function(callback) {
//       return fn.call(this, ...args, callback)
//     }
//   }
// }

// var readFileThunk = Thunk(fs.readFile)

// readFileThunk(filename)(callback)

// Thunkify模块ls

// const thunkify = require('thunkify')
// // log('thunkify', thunkify)
// const fs = require('fs')


// const readFileThunk = thunkify(fs.readeFile)
// readFileThunk('../../package.json')((err, buf) => {
//   log(buf.toString('utf8'))
// })

// Thunkify源码

// const assert = require('assert')

// module.exports = thunkify

// function thunkify(fn) {

//   // 断言如果传入不是函数，则中断函数执行
//   assert('function' == typeof fn, 'function requried')

//   // 传入一个带有回调函数作为参数的函数，返回一个函数
//   // const read = thunkify(fs.readFile)
//   return function(){
//     // 将第一次传入的参数放置一个数组中，供后面函数消费，返回一个函数
//     // read(filename)
//     var args = new Array(arguments.length)

//     var ctx = this

//     for(var i = 0; i < args.length; ++i) {
//       args[i] = arguments[i]
//     }

//     // 第二次将回调函数作为参数传入函数
//     // 将回调函数推入参数数组
//     // 最后，执行整个函数
//     // read(filename)(callback)

//     // 完整的过程
//     // const read = thunkify(fs.readFile)
//     // read('package.json')((err, data)=>{
//     //  console.log(data)
//     // })
//     /**
//      * fs.readFile.apply(this, ['package.json', function(err, data){console.log(data)}])
//      */
//     return function(done) {
//       var called

//       args.push(function(){
//         if(called) return
//         called = true

//         done.apply(null, arguments)
//       })

//       try {
//         fn.apply(ctx, args)
//       } catch (err) {
//         done(err)
//       }
//     }
//   }
// }

// Generator函数的流程管理

// function* Gen() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 4;
// }

// var gen = Gen()
// var res = gen.next()
// while(!res.done) {
//   log(res.value)
//   res = gen.next()
// }

// 上面代码会自动执行喊所有步骤，但并不适合异步操作
// 为了能使异步操作也可自动执行，这时thunk函数排上用场


// const read = thunkify(fs.readFile)

// var Gen = function* (){
//   var res1 = yield read('src/Generator/1.txt')
//   log(res1.toString())
//   var res2 = yield read('src/Generator/2.txt')
//   log(res2.toString())
// }

// var gen = Gen()

// var res1 = gen.next()
// res1.value((err, data)=>{
//   if (err) throw err
//   var res2 = gen.next(data)

//   res2.value((err, data)=>{
//     if (err) throw err
//     gen.next(data)
//   })
// })

// 上面实际上是反复将回调函数传入gen.next().value()中
// 通过递归实现自动流程管理

// 编写一个基于Thunk函数的自动流程管理器

/**
 * @param {Function} fn
 * 
 */

// run函数实际上就是上面循环回调的代码封装
// function run(fn) {
//   var gen = fn()

//   function next(err, data){
//     var result = gen.next(data)
//     if(result.done) return
//     result.value(next)
//   }

//   next()
// }

// var Gen = function* (){
//   var res1 = yield read('src/Generator/1.txt')
//   log(res1.toString())
//   var res2 = yield read('src/Generator/2.txt')
//   log(res2.toString())
// }

// run(Gen)

// co 模块是用于Generator函数自动执行的模块

// co模块的使用

// var Gen = function* (){
//  var r1 = yield read('src/Generator/1.txt')
//  log(r1.toString())
//  var r2 = yield read('src/Generator/2.txt')
//  log(r2.toString())
// }

// co(Gen).then(()=>log('Generator 函数执行完成'))

// 基于Promise对象的自动执行器
// var read = function(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, data) =>{
//       if(err) return reject(err)
//       resolve(data)
//     })
//   })
// }

// var Gen = function* (){
//   var r1 = yield read('src/Generator/1.txt')
//   log(r1.toString())
//   var r2 = yield read('src/Generator/2.txt')
//   log(r2.toString())
// }

// var gen = Gen()

// gen.next().value
//   .then(data=>{
//     gen.next(data).value
//       .then(data=>{
//         gen.next(data)
//       })
//   })
// 手动执行基于Promise的Generator实际就是为then方法层层添加回调

// function run(Gen) {
//   var gen = Gen()

//   next()

//   function next(data) {
//     var result = gen.next(data)
//     if (result.done) return result.value
//     result.value.then(data=>{
//       next(data)
//     })
//   }
// }

// run(Gen)

);var Gen = regeneratorRuntime.mark(function Gen() {
  var res;
  return regeneratorRuntime.wrap(function Gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [Promise.resolve(1), Promise.resolve(2)];

        case 2:
          res = _context.sent;

          log(res);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, Gen, this);
});

co(Gen);

var Gen1 = regeneratorRuntime.mark(function Gen1() {
  var res;
  return regeneratorRuntime.wrap(function Gen1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return {
            1: Promise.resolve(1),
            2: Promise.resolve(2)
          };

        case 2:
          res = _context2.sent;

          log(res);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, Gen1, this);
});
co(Gen1);