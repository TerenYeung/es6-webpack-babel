// Iterator

// 集合 数据结构
// 数组、对象、Map和Set

// Iterator为不同的数据结构提供统一的访问机制
// 任何数据结构只要部署Iterator接口，就可以完成遍历操作

// Iterator的主要作用：
// 1. 为各种数据结构提供统一的访问接口
// 2. 使数据结构成员按特定次序排列
// 3. 供for...of消费

// 一个简单的Iterator

const {log} = console

// function makeIterator(param) {
//   return {
//     next(){
//       return {
//         value: 1,
//         done: true
//       }
//     }
//   }
// }

// let it = makeIterator()
// log(it.next().value)

// 数据结构的默认Iterator接口
// 默认的Iterator接口部署在数据结构的Symbol.iterator属性
// let obj = {
//   [Symbol.iterator]() {
//     return {
//       next() {
//         return {
//           value: 1,
//           done: true
//         }
//       }
//     }
//   }
// }

// log(obj[Symbol.iterator]().next())

// let arr = [1, 2, 3]
// log(arr[Symbol.iterator]())

// for (let val of arr) {
//   log(val)
// }

// function makeIterator(array) {
//   let nextIndex = 0
//   return {
//     [Symbol.iterator] () {return this},
//     next() {
//       return nextIndex < array.length ?
//         {
//           value: array[nextIndex++],
//           done: false,
//         } : {
//           value: undefined,
//           done: true
//         }
//     }
//   }
// }

// let it2 = makeIterator([1, 2, 3])
// for (let value of it2) {
//   log(value)
// }

// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start
//     this.stop = stop
//   }

//   [Symbol.iterator]() {
//     return this
//   }

//   next() {
//     let value = this.value
//     if (value<this.stop) {
//       this.value++
//       return {
//         done: false,
//         value,
//       }
//     }
//     return {
//       done: true,
//       value,
//     }
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop)
// }

// for (let value of range(0, 3)) {
//   log(value)
// }

// let obj3 = {
//   value: 0,
//   [Symbol.iterator]() {
//     return {  
//       next() {
//         if (this.value < 5 ) {
//           return {
//             value: this.value++,
//             done: false
//           }
//         } else {
//           return {
//             value: undefined,
//             done: true
//           }
//         }
//       }
//     }
//   }
// }

// for (let val of obj3) {
//   log(val)
// }

// Iterator与Generator结合实现遍历器
// let obj4 = {
//   * [Symbol.iterator]() {
//     yield 'hello'
//     yield 'world'
//   }
// }

// for(let val of obj4) {
//   log(val)
// }

// let engines = new Set([
//   'Gecko',
//   'Trident',
//   'Webkit',
// ])

// for (let value of engines.entries()) {
//   log(value)
// }

// let map = new Map().set('a', 1).set('b', 2)

// for (let [key, value] of map) {
//   log(`${key}--${value}`)
// }