// const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

const config = {
  entry: ['babel-polyfill', './app.js'],
  devtool: '#eval-source-map',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      // { test: /\.(js|es|jsx)$/, use: 'eslint-loader', enforce: 'pre', exclude: /(node_modules)/ },
      { test: /\.(js|es|jsx)$/, use: 'babel-loader', exclude: /(node_modules)/ }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' })
  ]
};

module.exports = config;