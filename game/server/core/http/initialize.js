const path = require('path');
const express = require('express');
const assetManifest = require('../assets/asset-manifest');

module.exports = ({http, app}) => {
  app.use(express.static(path.join(__dirname, '../../../', 'client')));

  app.get('assetmanifest', (req, res) => {
    res.send(assetManifest);
  });

  http.listen(3000, () => {
    console.log('listening on *:3000');
  });
};
