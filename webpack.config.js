const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, './public/javascript/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/dist/')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
};

module.exports = config;
