/*
* @Author: Administrator
* @Date:   2018-02-06 09:25:24
* @Last Modified by:   Administrator
* @Last Modified time: 2018-02-08 08:55:54
*/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = {
  devtool: 'cheap-module-eval-source-map',
	entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, '../src/index.jsx')]
	},
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: '/dist/',
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: path.join(__dirname, '../node_modules/'),
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, '../node_modules/'),
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=20&name=resource/[name].[ext]'
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     use: 'css-loader!sass-loader',
      //     fallback: 'style-loader'
      //   }),
      // }
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
    // new ExtractTextPlugin("css/styles.css"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8081,
    overlay:{
      errors:true
    },
    hot: true,
    compress: true,
    publicPath: '/dist/',
    historyApiFallback: {
      index: path.join(__dirname,'../dist/index.html')
    }
  }
}

module.exports = config
