const { resolve, join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

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
      },
      {
        test: /\.(png|svg|jpg|gif|css)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: './build',
    inline: false,
    clientLogLevel: 'none',
    overlay: {
      warnings: true,
      errors: true
    },
    compress: true
  },

  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin(buildPath),
    new StaticSiteGeneratorPlugin({
      entry: 'main',
      locals: {},
      globals: {
        window: {},
        document: {}
      }
    }),
    new CompressionPlugin()
  ]
}
