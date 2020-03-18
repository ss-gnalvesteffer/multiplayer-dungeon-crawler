const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
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
io.on('connection', socket => {
  console.log('a client connected');

  socket.on('debug', message => {
    console.log(message);
  })
});
