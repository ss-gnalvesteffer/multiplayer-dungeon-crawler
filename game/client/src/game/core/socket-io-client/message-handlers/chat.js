import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
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
};
