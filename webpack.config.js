const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.png'),
      meta: {
        description: "Frontend client of the Alkemy's JS Challenge",
        'theme-color': '#2B5DFA',
        'og-image': path.resolve(__dirname, './public/cover.jpg')
      }
    })
  ]
}
