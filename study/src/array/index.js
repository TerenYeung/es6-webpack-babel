import {print} from '../util/'

// Array.from
// 将类数组对象和可遍历的对象转为真数组
// array-like: string / NodeList / arguments
// iterable ObjectL: Set and Map
// 所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
// 扩展运算符（...）也可以将某些数据结构转为数组
// 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换

// let arrayLike = {
//   0: 0,
//   1: 1,
//   2: 2,
//   length: 3,
// }
// // print(arrayLike)
// // es5
// let arr1 = [].slice.call(arrayLike)
// print('es5', arr1)

// let arr2 = Array.from(arrayLike, (item)=> item*item)
// print('es6', arr2)

// let arr3 = Array.from('hello')
// print('str', arr3)

// Array.of
// 将一组值转换为数组
// let arr4 = Array.of(2, 4, 6)
// print(arr4)

// Array.find
// let arr5 = [15, 3, -5, 2, 100]
// let r5 = arr5.find((val, idx, arr)=>val<0)
// print('find', r5)

// let arr6 = new Array(4).fill(7)
// print(arr6)


// entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象
// let arr7 = [1, 2, 3, 4, 5]
// print('keys', arr7.keys())
// print('values', arr7.values())
// print('entries', arr7.entries())

// print(arr7.entries().next().value)

// for (let index of arr7.keys()) {
//   print('index', index)
// }
// for (let value of arr7.values()) {
//   print('value', value)
// }
// for (let [index, value]of arr7.entries()) {
//   print('index-value', index + ' ' + value)
// }

// Array.prototype.includes
// let arr8 = [1, 2, 3, 4, 5]
// print(arr8.includes(2))
// print(arr8.indexOf(2))
// print(arr8.indexOf(-2))