const { resolve } = require('path')
module.exports = {
  alias: {
    // script
    'const-let': resolve(__dirname, '../src/const-let/'),
    'destructure': resolve(__dirname, '../src/destructure'),
    'array': resolve(__dirname, '../src/array'),
    'object': resolve(__dirname, '../src/object'),
  }
}