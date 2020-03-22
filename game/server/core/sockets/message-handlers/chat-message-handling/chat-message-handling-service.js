const uuid = require('uuid').v4;
const {AccountService} = require('../../../game/account/account-service');

const commandHandlers = {
  'register': require('./command-handlers/register'),
  'login': require('./command-handlers/login'),
};

class ChatMessageHandlingService {
  constructor({socketIo, socket, redisClient}) {
    this.socketIo = socketIo;
    this.socket = socket;
    this.redisClient = redisClient;
    this.sendChatMessage = (username, message, shouldBroadcast = false) => {
      (shouldBroadcast ? this.socketIo : this.socket).emit('message', {
        type: 'chat',
        data: {
          id: uuid(),
          timestamp: Date.now(),
          username,
          message,
        },
      })
    };
  }

  handleChatMessage({authToken, username, message}) {
    if (message.startsWith('::')) {
      const messageParts = message.slice(2).split(' ');
      const command = messageParts[0];
      const messageHandler = commandHandlers[command];
      if (messageHandler) {
        messageHandler({
          message: messageParts.splice(1),
          socket: this.socket,
          redisClient: this.redisClient,
          sendChatMessage: this.sendChatMessage
        });
      }
      return;
    }
    if (username && authToken) {
      new AccountService({socket: this.socket, redisClient: this.redisClient})
        .getAuthToken(username)
        .then((accountAuthToken) => {
          if (authToken === accountAuthToken) {
            this.sendChatMessage(username, message, true);
          }
        })
        .catch();
    } else {
      this.sendChatMessage('[SYSTEM]', 'You are not logged in.');
      this.sendChatMessage('[SYSTEM]', 'Register via "::register USERNAME PASSWORD"');
      this.sendChatMessage('[SYSTEM]', 'Login via "::login USERNAME PASSWORD"');
    }
  }
}

module.exports = ChatMessageHandlingService;
