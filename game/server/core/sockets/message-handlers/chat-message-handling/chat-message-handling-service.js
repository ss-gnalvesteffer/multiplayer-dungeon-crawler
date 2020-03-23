const uuid = require('uuid').v4;

const commandHandlers = {
  'register': require('./command-handlers/register'),
  'login': require('./command-handlers/login'),
};

module.exports = class ChatMessageHandlingService {
  constructor({socketIo, socket}) {
    this.socketIo = socketIo;
    this.socket = socket;
    this.redisClient = global.gameServer.redisClient;
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
      global.gameServer.accountService
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
};
