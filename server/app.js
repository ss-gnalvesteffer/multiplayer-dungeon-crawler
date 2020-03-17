const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const WebSocket = require('ws');
const assetManifest = require('./asset-manifest');

// HTTP
app.use(express.static('public'));
app.get('/assetmanifest', (req, res) => {
  res.send(assetManifest);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// WebSocket
const wss = new WebSocket.Server({ port: 3001 });
wss.on('connection', ws => {
  console.log('a client connected');
  ws.on('message', message => {
    console.log('received: %s', message);
  });
  ws.send('something');
});
