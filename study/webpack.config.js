const path = require('path')

const constants = require('./build/constans')

// webpack config file
const loaders = require('./build/loaders')
const {plugins}= require('./build/plugins')
const resolve = require('./build/resolve')

module.exports = {
  watch: process.env.NODE_ENV != constants.ENV_PROD,
  devtool: 'source-map',
  entry: () => './src/main.js',
  output: {
    // filename: '[name].[chunkhash:5].js',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  devServer:{
    host: '127.0.0.1',
    port: 8888,
    watch: true,
    devtool: 'source-map',
    progress: true,
    hot: true
  },
  module: loaders,
  plugins,
  resolve,
}