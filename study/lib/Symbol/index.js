'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _console = console,
    log = _console.log;

// Symbol 保证每个属性名的唯一性
// Symbol是新的原始数据类型

var sym = Symbol
// log(typeof sym)
// log(sym)

();var sym1 = Symbol('foo');
var sym2 = Symbol('bar'
// log(sym1)
// log(sym2)
// log(sym1.toString())
// log(sym1 === sym2)

// 作为属性名的 Symbol

);var sym3 = Symbol('s3');
var obj = _defineProperty({}, sym3, 'Hello');
// log(obj[sym3])

// Symbol.for()
var sym4 = Symbol.for('foo');
var sym5 = Symbol.for('foo'
// log(sym4 === sym5)
// log(Symbol.keyFor(sym4))
);