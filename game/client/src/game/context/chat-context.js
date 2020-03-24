import Game from '../index';

class ChatContext {
  sendChatMessage(message) {
    const game = Game.instance;
    game.socketIoClient.sendMessage('chat', {
      message,
    });
  }
}

export default ChatContext;
