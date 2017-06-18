import {print} from '../util/'
// 解构赋值
// 按照一定的模式， 从数组和对象中提取值
// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
// 数组的解构赋值
// let [a, b, c, d, e] = [1, 'str', true, {}, function func(){}]

// print(a)
// print(b)
// print(c)
// print(d)
// print(e)

// let [head, ...tail] = [1, 2, 3, 4, 5]
// print(head)
// print(tail)

// 对象的解构赋值

// let {foo, bar} = {
//   foo: 'foo',
//   bar: 'bar'
// }
// print('foo', foo)
// print('bar', bar)

// 字符串的解构赋值

// let str = 'hello'
// let [a, b, c, d, e] = str
// let {length: len} = str
// print(a)
// print(b)
// print(c)
// print(d)
// print(e)
// print('len', len)