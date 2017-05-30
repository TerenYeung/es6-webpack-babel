const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const config = {
  // devtool: 'source-map',
  // devtool: 'nosources-source-map',
  // devtool: 'cheap-source-map',
  devtool: 'inline-source-map',
	watch: true,
  watchOptions: {
    aggregateTmeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  node: {
    console: false,
    global: true,
    process: true,
    __filename: true,
    __dirname: "mock",
    Buffer: true,
    setImmediate: true
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 656000,
    maxAssetSize: 256000
  },
  // stats: 'minimal',
  entry: path.resolve(__dirname, './src/js/main.js'),
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
	},
	module: {
	   rules: [{
			test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
			// loader: 'babel-loader'
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
		}, {
			test: /\.css$/,
			// use: ['style-loader', 'css-loader']
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		},{
          test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
          use: [
            'file-loader'
          ]
        }]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
	],
  resolve: {
    extensions: [".js", ".json", ".css"],
    alias: {
      style: path.resolve(__dirname, 'src/css/style.css')
    }
  }
};

module.exports = config;



// module.exports = function(env) {
//   return {
//     devtool: "source-map",
//     entry: {
//       main: "./src/js/main.js",
//       vendors: ["moment", "lodash"]
//     },
//     output: {
//       filename: "[name].[chunkhash].js",
//       path: path.resolve(__dirname, "dist")
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: [
//             'style-loader',
//             'css-loader'
//           ]
//         },{
//           test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
//           use: [
//             'file-loader'
//           ]
//         }
//       ]
//     },
//     plugins: [
//       new webpack.optimize.CommonsChunkPlugin({
//         names: ["vendors", "manifest"] // 指定公共 bundle 的名字
//       }),
//       // function() {
//       //   this.plugin("done", function(stats) {
//       //     require("fs").writeFileSync(
//       //       path.join(__dirname, "dist", "stats.json"),
//       //       JSON.stringify(stats.toJson()));
//       //   });
//       // }
//       new ManifestPlugin({})
//     ]
//   };
// };


// module.exports = function() {
//     return {
//         entry: {
//             main: './src/js/main.js' //Notice that we do not have an explicit vendor entry here
//         },
//         output: {
//             filename: '[name].[chunkhash].js',
//             path: path.resolve(__dirname, 'dist')
//         },
//         plugins: [
//             new webpack.optimize.CommonsChunkPlugin({
//                 name: 'vendor',
//                 minChunks: function (module) {
//                    // this assumes your vendor imports exist in the node_modules directory
//                    return module.context && module.context.indexOf('node_modules') !== -1;
//                 }
//             }),
//             //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
//             new webpack.optimize.CommonsChunkPlugin({
//                 name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
//             })
//         ]
//     };
// }