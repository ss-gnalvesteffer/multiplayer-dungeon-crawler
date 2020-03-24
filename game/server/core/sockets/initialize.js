const PlayerService = require('../game/player/player-service');
const messageHandlerMetadata = require('./message-handlers');

const initializeSocket = async (gameServer) => {
  const {http} = gameServer;
  const io = require('socket.io')(http);

  io.on('connection', socket => {
    console.log('a client connected');

    socket.on('message', async (message) => {
      const username = (message.data.auth || {}).username;
      const playerService = username ? new PlayerService({gameServer, username, socket}) : undefined;
      const messageHandlerMetadatum = messageHandlerMetadata[message.type];
      if (messageHandlerMetadatum) {
        if (!await messageHandlerMetadatum.isAuthorized({message, gameServer})) {
          return;
        }
        await messageHandlerMetadatum.handler({message, socketIo: io, socket, gameServer, playerService});
      } else {
        console.error(`missing message handler for type "${message.type}"`);
      }
    });
  });
};

module.exports = initializeSocket;
