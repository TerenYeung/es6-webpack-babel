module.exports = {
 rules: [
   {
     test: /\.js[x]?$/,
     exclude: /node_modules/,
     loader: 'babel-loader',
   }
 ] 
}
