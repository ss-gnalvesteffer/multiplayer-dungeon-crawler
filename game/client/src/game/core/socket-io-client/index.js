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

  emit = (type, data) => {
    this.socket.emit(type, data);
  };
}
