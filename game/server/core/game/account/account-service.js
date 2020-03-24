const uuid = require('uuid').v4;

exports.maxUsernameLength = 12;
exports.maxPasswordLength = 25;

class AccountService {
  constructor(gameServer) {
    this.redisClient = gameServer.redisClient;
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
    const account = await this.getAccountByUsername(username);
    if (account) {
      onAccountCreationFail('an account already exists with this username');
      return;
    }
    await this.createAccount(username, password);
    onAccountCreationSuccess();
    await this.login(username, password, () => {
    }, () => {
    });
  }

  async login(username, password, onLoginSuccess, onLoginFail) {
    const account = await this.getAccountByUsername(username);
    if (account) {
      const accountPassword = await this.getAccountPassword(username);
      if (password === accountPassword) {
        const authToken = await this.setAuthToken(username, uuid());
        onLoginSuccess(authToken);
      } else {
        onLoginFail();
      }
    }
  }
}

module.exports = AccountService;
