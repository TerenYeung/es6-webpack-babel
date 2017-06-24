'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _console = console,
    log = _console.log;

var Shape = function () {
  _createClass(Shape, null, [{
    key: 'say',


    // 静态属性
    // static greet = 'hello world';

    // 静态方法
    value: function say(txt) {
      log(txt || Shape.greet);
    }

    // 实例属性
    // z = 12;

  }]);

  function Shape(x, y) {
    _classCallCheck(this, Shape);

    // 实例属性
    this.x = x;
    this.y = y;
  }

  // 实例方法


  _createClass(Shape, [{
    key: 'toString',
    value: function toString() {
      return this.x + ', ' + this.y;
    }
  }]);

  return Shape;
}();

// const shape = new Shape(1, 2)
// log(shape.toString())
// Shape.say()

var Point = function (_Shape) {
  _inherits(Point, _Shape);

  _createClass(Point, null, [{
    key: 'hello',
    value: function hello(txt) {
      _get(Point.__proto__ || Object.getPrototypeOf(Point), 'say', this).call(this, txt);
    }
  }]);

  function Point(x, y, color) {
    _classCallCheck(this, Point);

    var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, x, y));
    // 子类只有在调用super之后才可以使用this


    log(_get(Point.prototype.__proto__ || Object.getPrototypeOf(Point.prototype), 'toString', _this).call(_this));

    _this.color = color;
    return _this;
  }

  return Point;
}(Shape);

var point = new Point(1, 2, 'red');
log(point);

Point.hello('hello world');