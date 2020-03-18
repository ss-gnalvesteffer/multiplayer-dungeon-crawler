const messageHandlers = require('./message-handlers');

const initializeSocket = http => {
  const io = require('socket.io')(http);

  io.on('connection', socket => {
    console.log('a client connected');

    socket.on('message', (message) => {
      const { type, data } = message;
      const messageHandler = messageHandlers[type];
      if (messageHandler) {
        messageHandler(message, socket);
      } else {
        console.error(`missing message handler for type "${type}"`);
      }
    });
  });
};

module.exports = initializeSocket;
