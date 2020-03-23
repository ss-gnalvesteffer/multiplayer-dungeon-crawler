import io from 'socket.io-client';
import messageHandlers from './message-handlers';

export default class SocketIoClient {
  start = () => {
    this.socket = io();
    this.socket.on('message', ({type, data}) => {
      const messageHandler = messageHandlers[type];
      if (!messageHandler) {
        return;
      }
      messageHandler(data);
    });
  };

  sendMessage = (type, data) => {
    this.socket.emit('message', {type, data});
  };
}
