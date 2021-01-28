const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/devindex.html'),
      favicon: path.resolve(__dirname, './public/favicon.png'),
      title: 'Alkemy JS Challenge',
      meta: {
        description: "Frontend client of the Alkemy's JS Challenge",
        'theme-color': '#2B5DFA',
        'og-image': path.resolve(__dirname, './public/cover.jpg')
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./modules-manifest.json')
    })
  ]
}
