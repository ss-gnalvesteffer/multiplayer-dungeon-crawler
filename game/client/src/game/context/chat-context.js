import Game from '../index';

class ChatContext {
  sendChatMessage(message) {
    const game = Game.instance;
    game.socketIoClient.emit('message', {
      type: 'chat',
      data: {
        authToken: game.state.player.authToken,
        username: game.state.player.username,
        message,
      }
    });
  }
}

export default ChatContext;
