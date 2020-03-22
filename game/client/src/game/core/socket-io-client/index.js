import io from 'socket.io-client';
import Game from '../../index';

export default class SocketIoClient {
  start = () => {
    const game = Game.instance;
    this.socket = io();
    this.socket.on('message', ({type, data}) => {
      if (type === 'chat') {
        game.state = {
          ...game.state,
          chat: {
            ...game.state.chat,
            messages: [
              ...game.state.chat.messages,
              data,
            ],
          }
        };
      } else if (type === 'login') {
        const {username, authToken} = data;
        game.state = {
          ...game.state,
          user: {
            ...game.state.user,
            username,
            authToken,
          }
        };
      }
    });
  };

  sendChatMessage(message) {
    const game = Game.instance;
    this.socket.emit('message', {
      type: 'chat',
      data: {
        authToken: game.state.user.authToken,
        username: game.state.user.username,
        message,
      }
    });
  }
}
