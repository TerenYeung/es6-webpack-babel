'use strict';

var _console = console,
    log = _console.log;
// Promise.resolve()
// Promise.reject()
// Promise.all()
// Promise.race()
// Promise.try()
// Promise.prototype.then()
// Promise.prototype.catch()

// What's Promise
// 1. function: 构造函数
// 2. 状态机
//  2.1 Pending
//  2.2 Fufilled / Resolved
//  2.3 Rejected 
// 以上状态只能由异步操作的解构决定，
// 一旦状态改变，就不会再变，任何时候都可得到这个解构

// 基本用法
// let status = -1
// let p1 = new Promise((resolve, reject)=>{
//   if (status>0) {
//     resolve('resolve')
//   } else {
//     reject(new Error('reject'))
//   }
// })

// p1.then(val=>{
//   log(val)
// }, err=>{
//   log(err)
// })

// Promise 的特点
// 1. Promise 新建后就会立即执行
// let p2 = new Promise((resolve, reject)=>{
//   log('I am executing')
//   resolve()
// })

// p2.then(()=>{
//   log('I am resolve')
// })

// log('I am not Promise')

// 2. 状态一旦改变，就永久保持该状态
// let p5 = new Promise((resolve, reject)=>{
//   resolve('ok')
//   throw new Error('error')
// })

// p5.then(val=>{
//   log(val)
// }).catch(err=>{
//   log(err)
// })


// Promise.prototype.then()
// then方法是为状态改变时添加回调函数
// then方法返回一个新的Promise实例

// let p3 = Promise.resolve()

// let p4 = p3.then(resolve=>log('I am resolved'))
// log(p3 === p4) // false

// Promise.prototype.catch() => Promise.prototype.then(null, rejection)

// Promise对象的错误具有‘冒泡’性质，会一直向后传递，直到被捕获
// Promise的错误如果没有catch捕获将不会传递到外层代码


// Promise.all()
// 将多个Promise实例，包装成一个新的Promise实例

// let ps1 = [1, 2, 3].map((item)=>{
//   return Promise.resolve(item)
// })

// Promise.all(ps1).then(val=>{
//   log(val)
// })

// let ps2 = [1, 2, 3].map((item)=>{
//   if (item == 1) {
//     return Promise.reject(item)
//   }
//   return Promise.resolve(item)
// })

// Promise.all(ps2).then(val=>{
//   log(val)
// }).catch(err=>{
//   log(err)
// })

// Promise.race()
// 将多个Promise实例包装为一个新的Promise实例
// 只要其中一个实例率先改变状态，整个方法所创建的对象的状态就发生改变

// let ps3 = [1000, 2000, 3000].map(item=>{
//   return new Promise((resolve, reject)=>{
//     if (item<2000) {
//       reject(item)
//     }
//     resolve(item)
//   })
// })
// // log(ps3)
// Promise.race(ps3).then(val=>log(val)).catch(err=>log(err))

// Promise.resolve()
// 可以将普通对象转换为Promise对象
// 根据参数不同可分为以下情况：

// 1. Promise.resolve(promise obj)

// 2. thenable

// let thenable = {
//   then: (resolve, reject) => {
//     resolve('success')
//   }
// }

// Promise.resolve(thenable).then(val=>{
//   log(val)
// })

// 3. params 是一个原始值
// Promise.resolve('hello').then(val=>log(val))

// 4. no params


// 事件循环与Promise

var p6 = new Promise(function (resolve, reject) {
  log('starting...');
  resolve('resolved');
});

p6.then(function (val) {
  return log(val);
});

Promise.resolve('where I am ?').then(function (val) {
  return log(val);
});

log('I am here');

setTimeout(log, 0, 'next tick'

// 1. p6里面的代码立即执行 'starting'
// 2. p6.then指定的回调等到所有同步任务执行完后才执行 'I am here'
// 3. 执行p6.then的回调，'resolved'
// 4. 执行Promise.resolve的回调，'where I am' ,注意立即Promise.resolve()是在本轮'事件循环'的结束开始
// 5. setTimeout(fn, 0)在下一轮'事件循环'开始执行
);