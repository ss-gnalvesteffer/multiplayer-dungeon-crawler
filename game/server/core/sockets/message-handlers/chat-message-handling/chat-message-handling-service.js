const uuid = require('uuid').v4;

const commandHandlers = {
  'register': require('./command-handlers/register'),
  'login': require('./command-handlers/login'),
};

module.exports = class ChatMessageHandlingService {
  constructor({socketIo, socket, gameServer}) {
    this.socketIo = socketIo;
    this.socket = socket;
    this.redisClient = gameServer.redisClient;
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

    this.handleChatMessage = async ({message, auth}) => {
      if (message.startsWith('::')) {
        const messageParts = message.slice(2).split(' ');
        const command = messageParts[0];
        const messageHandler = commandHandlers[command];
        if (messageHandler) {
          await messageHandler({
            message: messageParts.splice(1),
            socket: this.socket,
            redisClient: this.redisClient,
            sendChatMessage: this.sendChatMessage,
            gameServer,
          });
        }
        return;
      }
      if (auth.username && auth.authToken) {
        if (await gameServer.accountService.isValidAuthToken(auth.username, auth.authToken)) {
          this.sendChatMessage(auth.username, message, true);
        }
      } else {
        this.sendChatMessage('[SYSTEM]', 'You are not logged in.');
        this.sendChatMessage('[SYSTEM]', 'Register via "::register USERNAME PASSWORD"');
        this.sendChatMessage('[SYSTEM]', 'Login via "::login USERNAME PASSWORD"');
      }
    };
  }
};
