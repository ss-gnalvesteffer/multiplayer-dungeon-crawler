import io from 'socket.io-client';
import messageHandlers from './message-handlers/index.js';

const initializeSocket = () => {
  const socket = io();
  socket.on('message', (message) => {
    const { type } = message;
    const messageHandler = messageHandlers[type];
    if (messageHandler) {
      messageHandler(message, socket);
    } else {
      console.error(`missing message handler for type "${type}"`);
    }
  });
};

export default initializeSocket;
