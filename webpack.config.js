const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
	watch: true,
  entry: path.resolve(__dirname, 'test.js'),
	output: {
		filename: '[name].min.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	   rules: [{
			test: /\.(js|jsx)$/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};

module.exports = config;