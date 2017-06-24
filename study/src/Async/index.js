const {log} = console
// const fs = require('fs')
const co = require('co')
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
async function fn(args) {
  //
}

// the same as

// function fn(args) {
//   return spawn(function* (){

//   })
// }

// // spawan就是自动执行器
// function spawn(Gen){
//   return new Promise((resovle, reject)=>{
//     var gen = Gen()

//     function step(nextFunc) {
//       try {
//         var next = nextFunc
//       } catch (e) {
//         return reject(e)
//       }
//       if(next.done) {
//         return resolve(next.value)
//       }

//       Promise.resovle(next.value).then(val=>{
//         step(()=>gen.next(val))
//       }).catch(e=>gen.throw(e))
//     }

//     step(()=> gen.next(undefined))

//   })
// }

// async后续的未完成
