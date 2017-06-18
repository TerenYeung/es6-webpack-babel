/*
 * @Author: terenyeung 
 * @Date: 2017-06-18 20:33:45 
 * @Last Modified by: terenyeung
 * @Last Modified time: 2017-06-18 22:08:42
 */

// let command
// function: declare variables

// categories:
// var / const / let / function / class / import

/**
 *  attributes
 * 1. 块级作用域
 * 2. 不存在变量提升
 * 3. 暂时性死区
 * 4. 不允许重复声明
 * 5. do 表达式获取块级作用域的返回值
 */
import { print } from '../util/'
// {
//   let a = 1;
//   var b = 2;
// }

// babel 在转换let 声明的变量时，将原来的a转换_a
 // print(a)
 // print(b)

// let 块级作用域的应用
  // let arr1 = [];
  // let arr2 = [];
  // for(var i=0; i<5; i++) {
  //  arr1[i] = ()=> print('arr1', i);
  // } 
  // arr1[3](); // 5

  // for(let i=0; i<5; i++) {
  //  arr2[i] = ()=> print('arr2', i)
  // }
  // arr2[4](); // 4

// {
//   tmp = 'str'
//   let tmp = 1;
// }
// print(tmp)

// ---------------
// const用于声明常量
// const保证的是变量的内存地址不得变动
// const PI = 3.1415
// PI = 1;
// const constant = {
//   name: 'teren',
//   age: 18
// }
// print(constant)
// constant.age = 20
// print(constant)

