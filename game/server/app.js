const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const assetManifest = require('./asset-manifest');

const isDev = process.argv[2] !== undefined;

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack.config');

  webpackConfig.mode = 'development';
  //reload=true:Enable auto reloading when changing JS files or content
  //timeout=1000:Time from disconnecting from server to reconnecting
  webpackConfig.entry.index.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

  //Add HMR plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(webpackConfig);

  //Enable "webpack-dev-middleware"
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  //Enable "webpack-hot-middleware"
  app.use(webpackHotMiddleware(compiler));
}

// HTTP
app.use(express.static(path.join(__dirname, '..', 'client')));
app.get('/assetmanifest', (req, res) => {
  res.send(assetManifest);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// Socket.io
io.on('connection', socket => {
  console.log('a client connected');

  socket.on('debug', message => {
    console.log(message);
  })
});
