const path = require('path');
const express = require('express');

module.exports = () => {
  const {app, http} = global.gameServer;
  app.use(express.static(path.join(__dirname, '../../../', 'client')));

  http.listen(3000, () => {
    console.log('listening on *:3000');
  });
};
