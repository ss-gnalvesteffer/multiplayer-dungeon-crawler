const AccountService = require('./account/account-service');

class GameServer {
  start = async () => {
    this.express = require('express');
    this.app = this.express();
    this.http = require('http').createServer(this.app);
    this.redisClient = require('async-redis').createClient();

    require('../webpack/initialize')(this);
    require('../http/initialize')(this);
    await require('../sockets/initialize')(this);

    this.accountService = new AccountService(this);
  };
}

module.exports = GameServer;
