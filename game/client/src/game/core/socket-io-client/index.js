import io from 'socket.io-client';
import Game from '../../index';
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
    const game = Game.instance;
    this.socket.emit('message', {
      type,
      data: {
        ...data,
        auth: {
          authToken: game.state.player.authToken,
          username: game.state.player.username,
        },
      }
    });
  };
}
