const { version } = require('./package.json')
const { resolve, join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildPath = resolve(join(__dirname, 'build'))

module.exports = {

  entry: './src/build.js',

  output: {
    filename: `build-${version}.js`,
    path: buildPath,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
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
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'sass-loader']
        })
      }
    ]
  },

  devServer: {
    contentBase: './build',
    port: 9000,
    inline: false,
    clientLogLevel: 'none',
    overlay: {
      warnings: true,
      errors: true
    },
    compress: true
  },

  devtool: 'source-map',

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
    new CompressionPlugin(),
    new ExtractTextPlugin({
      filename: `style-${version}.css`
    })
  ]
}
