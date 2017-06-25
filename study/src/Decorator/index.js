const {log} = console
// Decorator是一个函数，用来修饰类的行为
// 修饰器只能用于类和类的方法
// 定义一个修饰器

// @testable
// class TestableClass {}

// // the same as
// /**
//  * @decorator
//  * class A {}
//  * 
//  * class A {}
//  * A = descrator(A) || A
//  */

// function testable(target) {
//   target.isTestable = true
// }

// log(TestableClass.testable)

// 动态传参，为类添加一个静态属性

// function testable(isTestable) {
//   return function(target) {
//     target.isTestable = isTestable
//   }
// }

// @testable(true)
// class Test {}
// log(Test.isTestable)

// @testable('hello world')
// class Hello {}
// log(Hello.isTestable)

// 为类添加一个实例属性
// function say(target){
//   target.prototype.greet = 'hello world'
// }

// @say
// class Greet {}
// let obj = new Greet()
// log(obj.greet)

// import { mixins } from './mixins'

// const Foo = {
//   foo(){log('foo')}
// }

// @mixins(Foo)
// class MyClass {}

// let myClass = new MyClass
// myClass.foo()

// 修饰器不仅可以修饰类， 也可以修饰类的属性
// class Person {
//   constructor(first, last){
//     this.first = first
//     this.last = last
//   }

//   @readonly
//   name() {
//     return `${this.first} ${this.last}`
//   }
// }

// function readonly(target, name, descriptor) {
//   descriptor.writable = false
//   return descriptor
// }

// let person = new Person('teren', 'yeung')
// log(person.name())
// person.name = () => {log('hello world')}
// log(person.name())

// class Math {
//   @print
//   add(a, b) {
//     return a + b
//   }
// }

// function print(target, name, descriptor) {
//   // log('target', target)
//   // log('name', name)
//   // log('descriptor', descriptor)

//   let oldValue = descriptor.value

//   descriptor.value = function() {
//     log(`Calling ${name} with`, arguments)
//     return oldValue.apply(null, arguments)
//   }

//   return descriptor
// }

// let math = new Math
// math.add(1, 2)

function decorateArmour(target, key, descriptor) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
