// server.js
console.log('ENTRY - server.js file!');

const path = require('path');
const express = require('express');

// require webpack, middleware and config
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();

// create compiler object using webpackConfig
const compiler = webpack(webpackConfig);

// set path for static files
app.use(express.static(path.join(__dirname, '../www')));

// use webpack middleware ...
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

var port = process.env.PORT || 4008;
app.listen(port, () => {
  console.log(`SERVER listening on : ${port}`);
});

