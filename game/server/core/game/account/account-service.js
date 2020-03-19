const {promisify} = require('util');
const uuid = require('uuid').v4;

class AccountService {
  constructor({socket, redisClient}) {
    this.socket = socket;
    this.redisClientGetAsync = promisify(redisClient.get).bind(redisClient);
    this.redisClientSetAsync = promisify(redisClient.set).bind(redisClient);
  }

  getRedisAccountKey(username) {
    return `account:${username}`;
  }

  getAccountByUsername(username) {
    return this.redisClientGetAsync(this.getRedisAccountKey(username));
  }

  getAccountPassword(username) {
    return this.redisClientGetAsync(`${this.getRedisAccountKey(username)}:password`);
  }

  setAccountPassword(username, password) {
    return this.redisClientSetAsync(`${this.getRedisAccountKey(username)}:password`, password);
  }

  createAccount(username, password) {
    return this.redisClientSetAsync(`${this.getRedisAccountKey(username)}`, true)
      .then(() => this.setAccountPassword(username, password));
  }

  getAuthToken(username) {
    return this.redisClientGetAsync(`${this.getRedisAccountKey(username)}:authToken`);
  }

  setAuthToken(username, authToken) {
    return this.redisClientSetAsync(`${this.getRedisAccountKey(username)}:authToken`, authToken).then(() => authToken);
  }

  register(username, password, onAccountCreationSuccess, onAccountCreationFail) {
    this.getAccountByUsername(username)
      .then((accountData) => {
        if (accountData) {
          onAccountCreationFail('an account already exists with this username');
          return;
        }
        this.createAccount(username, password)
          .then(onAccountCreationSuccess)
          .then(() => this.login(
            username,
            password,
            () => {
            },
            () => {
            }
            )
          )
          .catch(onAccountCreationFail);
      })
      .catch(onAccountCreationFail);
  }

  login(username, password, onLoginSuccess, onLoginFail) {
    this.getAccountByUsername(username)
      .then((account) => {
        if (account) {
          this.getAccountPassword(username)
            .then((accountPassword) => {
              if (password === accountPassword) {
                this.setAuthToken(username, uuid())
                  .then((authToken) => {
                    this.socket.emit('message', {
                      type: 'login',
                      data: {
                        username,
                        authToken,
                      }
                    });
                    onLoginSuccess();
                  })
                  .catch(onLoginFail);
                return;
              }
              onLoginFail();
            })
            .catch(onLoginFail);
          return;
        }
        onLoginFail();
      })
      .catch(onLoginFail);
  }
}

module.exports = AccountService;
