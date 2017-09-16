const { version } = require('./package.json')
const { resolve, join } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildPath = resolve(join(__dirname, 'build'))

module.exports = {

  entry: {
    build: './src/build.js',
    site: './src/components/Site.js',
    page404: './src/components/Page404.js'
  },

  output: {
    filename: `[name]-${version}.js`,
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
    new CopyWebpackPlugin([
      { from: 'src/static', to: buildPath }
    ]),
    new StaticSiteGeneratorPlugin({
      entry: 'build',
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
