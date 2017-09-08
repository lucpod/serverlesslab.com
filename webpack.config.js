const { resolve, join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const buildPath = resolve(join(__dirname, 'build'))

module.exports = {

  entry: './src/build.js',

  output: {
    filename: 'build.js',
    path: buildPath,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(buildPath),
    new StaticSiteGeneratorPlugin({
      paths: [
        '/'
      ],
      locals: {
        // Properties here are merged into `locals`
        // passed to the exported render function
        greet: 'Hello'
      }
    })
  ]
}
