const { resolve } = require('path')
module.exports = {
  alias: {
    // script
    'const-let': resolve(__dirname, '../src/const-let/'),
    'destructure': resolve(__dirname, '../src/destructure'),
    'array': resolve(__dirname, '../src/Array'),
    'object': resolve(__dirname, '../src/Object'),
    'symbol': resolve(__dirname, '../src/Symbol'),
    'promise': resolve(__dirname, '../src/Promise'),
  }
}