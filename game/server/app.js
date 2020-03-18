const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const assetManifest = require('./asset-manifest');

// HTTP
app.use(express.static(path.join(__dirname, '..', 'client')));
app.get('/assetmanifest', (req, res) => {
  res.send(assetManifest);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// Socket.io
require('./core/sockets/initialize')(http);
