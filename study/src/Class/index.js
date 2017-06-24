const {log} = console

class Shape {

  // 静态属性
  // static greet = 'hello world';

  // 静态方法
  static say(txt){
    log(txt || Shape.greet)
  }

  // 实例属性
  // z = 12;

  constructor(x, y) {
    // 实例属性
    this.x = x;
    this.y = y;
  }

  // 实例方法
  toString() {
    return `${this.x}, ${this.y}`
  }
}

// const shape = new Shape(1, 2)
// log(shape.toString())
// Shape.say()

class Point extends Shape {

  static hello(txt) {
    super.say(txt)
  }

  constructor(x, y, color) {
    // 子类只有在调用super之后才可以使用this
    super(x, y)

    log(super.toString())

    this.color = color
  }
}

const point = new Point(1, 2, 'red')
log(point)

Point.hello('hello world')
