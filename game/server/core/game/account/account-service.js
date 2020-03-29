const uuid = require('uuid').v4;
const PlayerService = require('../player/player-service');

exports.maxUsernameLength = 12;
exports.maxPasswordLength = 25;

class AccountService {
  constructor(gameServer) {
    this.redisClient = gameServer.redisClient;
    this.gameServer = gameServer;
  }

  getRedisAccountKey(username) {
    return `account:${username}`;
  }

  async getAccountByUsername(username) {
    return await this.redisClient.get(this.getRedisAccountKey(username));
  }

  async getAccountPassword(username) {
    return await this.redisClient.get(`${this.getRedisAccountKey(username)}:password`);
  }

  async setAccountPassword(username, password) {
    return await this.redisClient.set(`${this.getRedisAccountKey(username)}:password`, password);
  }

  async createAccount(username, password) {
    await this.redisClient.set(`${this.getRedisAccountKey(username)}`, true);
    await this.setAccountPassword(username, password);
    const playerService = new PlayerService({gameServer: this.gameServer, username});
    await playerService.setMapId('start');
    await playerService.setPositionX(1);
    await playerService.setPositionY(1);
  }

  async getAuthToken(username) {
    return await this.redisClient.get(`${this.getRedisAccountKey(username)}:authToken`);
  }

  async setAuthToken(username, authToken) {
    await this.redisClient.set(`${this.getRedisAccountKey(username)}:authToken`, authToken);
    return authToken;
  }

  async isValidAuthToken(username, authToken) {
    return await this.getAuthToken(username) === authToken;
  }

  async register(username, password, onAccountCreationSuccess, onAccountCreationFail) {
    const sanitizedUsername = (username || '').trim();
    const account = await this.getAccountByUsername(sanitizedUsername);
    if (account) {
      await onAccountCreationFail('an account already exists with this username');
      return;
    }
    await this.createAccount(sanitizedUsername, password);
    await onAccountCreationSuccess();
  }

  async login(username, password) {
    const sanitizedUsername = username.trim();
    const account = await this.getAccountByUsername(sanitizedUsername);
    if (account) {
      const accountPassword = await this.getAccountPassword(sanitizedUsername);
      if (password === accountPassword) {
        return await this.setAuthToken(sanitizedUsername, uuid());
      } else {
        return undefined;
      }
    }
  }
}

module.exports = AccountService;
