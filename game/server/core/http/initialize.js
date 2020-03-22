const path = require('path');
const express = require('express');

module.exports = ({http, app}) => {
  app.use(express.static(path.join(__dirname, '../../../', 'client')));

  http.listen(3000, () => {
    console.log('listening on *:3000');
  });
};
