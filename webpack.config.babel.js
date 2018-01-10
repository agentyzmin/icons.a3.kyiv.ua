import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const buildContext = {
  title: 'Транспортні іконки Києва. Агенти змін',
}

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
            //presets: ['@babel/preset-env']
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
