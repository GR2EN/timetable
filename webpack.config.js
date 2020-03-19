const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new CopyPlugin([
      { from: 'public/static', to: '' },
    ]),
  ],
  devServer: {
    port: 8000,
    contentBase: 'static',
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
