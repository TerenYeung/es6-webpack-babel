"use strict";

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