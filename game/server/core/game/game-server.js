const StateManager = require('./state-manager');
const AccountService = require('./account/account-service');

class GameServer {
  constructor() {
    global.gameServer = this;
  }

  start = () => {
    this.stateManager = new StateManager();
    this.express = require('express');
    this.app = this.express();
    this.http = require('http').createServer(this.app);
    this.redisClient = require('redis').createClient();
    this.accountService = new AccountService();

    require('../webpack/initialize')();
    require('../http/initialize')();
    require('../sockets/initialize')();

  };
}

module.exports = GameServer;
