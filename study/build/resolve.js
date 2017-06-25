const { resolve } = require('path')

const dirList = [
  'const-let',
  'destructure',
  'Array',
  'Object',
  'Symbol',
  'Promise',
  'Iterator',
  'Generator',
  'Async',
  'Class',
  'Decorator',
]

const resolveDirList = () => {
  let obj = {}
  dirList.forEach(dir=>{
    let path = resolve(__dirname, `../src/${dir}`)
    obj[dir] = path
  })
  return obj
}

module.exports = {
  alias: resolveDirList()
}