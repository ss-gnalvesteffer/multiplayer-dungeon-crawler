import io from 'socket.io-client';
const initializeSocket = () => {
  const socket = io();
  socket.emit('debug', 'Hello world!');
};

export default initializeSocket;
