var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: path.resolve(__dirname, 'src') + '/home.jsx',

  output: {
      path: path.resolve(__dirname, 'build') + '/app',
      filename: 'bundle.js',
      publicPath: '/app/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js(x)$/,
        loaders: 'babel-loader',
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css|\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
    // require('style.less')
    // --> <link ...
  }
};
