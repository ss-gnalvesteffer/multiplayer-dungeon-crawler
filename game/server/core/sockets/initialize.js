const messageHandlers = require('./message-handlers');

const initializeSocket = () => {
  const {http} = global.gameServer;
  const io = require('socket.io')(http);

  io.on('connection', socket => {
    console.log('a client connected');

    socket.on('message', (message) => {
      const messageHandler = messageHandlers[message.type];
      if (messageHandler) {
        messageHandler({message, socketIo: io, socket});
      } else {
        console.error(`missing message handler for type "${message.type}"`);
      }
    });
  });
};

module.exports = initializeSocket;
