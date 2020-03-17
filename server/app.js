const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const assetManifest = require('./asset-manifest');

app.use(express.static('public'));
app.get('/assetmanifest', (req, res) => {
  res.send(assetManifest);
});

io.on('connection', socket => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
