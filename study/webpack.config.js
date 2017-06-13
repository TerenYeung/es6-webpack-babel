const path = require('path')
const webpack = require('webpack')
const resolve = require('./config/resolve')

module.exports = {
  watch: true,
  devtool: 'srouce-map',
  entry: () => './src/main.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve,  
}