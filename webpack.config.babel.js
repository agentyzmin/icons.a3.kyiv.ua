const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const yaml = require('js-yaml')
const fs = require('fs')

const buildContext = yaml.load(
    fs.readFileSync(__dirname + '/conf/data.yaml'),
    {encoding: 'utf-8'},
)

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(Object.assign({}, {
      template: 'src/templates/index.hbs',
    }, buildContext)),
    new CopyWebpackPlugin([
      {from: 'src/assets/', to: 'assets/'},
      {from: 'src/svg/', to: 'assets/svg/'}
    ])
  ]
}
