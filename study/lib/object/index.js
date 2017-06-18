'use strict';

var _util = require('../util');

// 对象的属性和方法简写方式

// let name = "teren"
// let age = 18

// let obj = {
//   name,
//   age,
//   say(val){
//     print(val)
//   }
// }
// print(obj)
// obj.say('hello world')

// 属性名表达式
// ES6 允许字面量定义对象时，把表达式放在方括号内。
// let propKey = 'foo'
// let obj2 = {
//   [propKey]: 'foo'
// }
// print(obj2)

// setter and getter
// let language = {
//   set current(name){
//     this.log.push(name)
//   },
//   log: []
// }
// equals to 
// Object.defineProperty(language, 'current', {
//   set: function(name) {
//     this.log.push(name)
//   }
// })
// language.current = 'EN'
// language.current = 'FA'
// print(language.log)

// 对象的遍历
var obj3 = {
  name: 'teren',
  age: 18,
  height: 180,
  weigth: '60kg'

  // for(var key in obj3) {
  //   print(`${key} --${obj3[key]}`)
  // }

};(0, _util.print)(Object.keys(obj3));

(0, _util.print)(Object.getOwnPropertyNames(obj3));