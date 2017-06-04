const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

const config = {
  // devtool: 'source-map',
  // devtool: 'nosources-source-map',
  // devtool: 'cheap-source-map',
  target: 'web',
 
  devtool: 'source-map',
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
  entry: {
    main: path.resolve(__dirname, './src/js/main.js'),
     vendors: ["moment", "lodash"]
  },
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    chunkFilename: '[name].js',
    crossOriginLoading: 'use-credentials',
    // pathinfo: true,
	},

	module: {
    noParse: /jquery | lodash /,
    rules: [{
			test: /\.txt$/,
			use: ['raw-loader']
		},{
			test: /\.md$/,
			use: ['html-loader', 'markdown-loader']
		},{
			test: /\.(js|jsx)$/,
      exclude: /(node_modules | bower_components)/,
			// loader: 'babel-loader'
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}], 'env', 'react'],
          plugins: ['syntax-dynamic-import', 'transform-object-rest-spread']
        }
      }]
		}, {
			test: /\.css$/,
			// use: ['style-loader', 'css-loader']
			use: ExtractTextPlugin.extract({
				use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              minimize: true,
              localIndentName: '[local]--[hash:base64:7]'
            }
          }, /*{
           loader: 'import-glob-loader'
          }*/]
			})
		},{
			test: /\.scss$/,
			// use: ['style-loader', 'css-loader']
			use: ExtractTextPlugin.extract({
				use: ['css-loader', {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        },
          // 'import-glob-loader'
        ]
			})
		},{
          test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
          use: [
            'url-loader?limit=10000',
            // 'file-loader?name=[name].[hash:5].[ext]'
            // 'file-loader?name=[name].[sha1:hash:base64:7].[ext]',
          ]
        }]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest'],
      // children: true,
    }),
    new webpack.BannerPlugin({
      banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]",
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
	],
  resolve: {
    extensions: [".js", ".json", ".css"],
    alias: {
      style: path.resolve(__dirname, 'src/css/style.css'),
      header: path.resolve(__dirname, 'src/js/components/header.js')
    }
  },
  devServer: {
    // publicPath: "/public/",
    // progress: true,
    port: 8888,
    compress: true,
    // https: true
  }
};

// const config = {
//   entry: {
//     posts: './src/js/multi/posts.js',
//     about: './src/js/multi/about.js'
//   },
//   output: {
//     filename: "[name].js",
//     chunkFilename: "[id].js",
//     path: path.resolve(__dirname, './dist/multi'),
//   },
//   module: {
//     rules: [
//       {
// 			test: /\.css$/,
// 			// use: ['style-loader', 'css-loader']
// 			use: ExtractTextPlugin.extract({
//         fallback: 'style-loader',
// 				use: 'css-loader'
// 			})
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: 'style.[hash:5].css',
//       allChunks: true,
//       disable: false
//     })
//   ]
// }

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