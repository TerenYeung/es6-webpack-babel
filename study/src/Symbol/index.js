const {log } = console

// Symbol 保证每个属性名的唯一性
// Symbol是新的原始数据类型

const sym = Symbol()
// log(typeof sym)
// log(sym)

const sym1 = Symbol('foo')
const sym2 = Symbol('bar')
// log(sym1)
// log(sym2)
// log(sym1.toString())
// log(sym1 === sym2)

// 作为属性名的 Symbol

const sym3 = Symbol('s3')
const obj = {
  [sym3]: 'Hello'
}
// log(obj[sym3])

// Symbol.for()
const sym4 = Symbol.for('foo')
const sym5 = Symbol.for('foo')
// log(sym4 === sym5)
log(Symbol.keyFor(sym4))