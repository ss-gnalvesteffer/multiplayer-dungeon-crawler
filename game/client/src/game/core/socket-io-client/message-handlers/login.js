import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
  const {username, authToken} = data;
  game.state = {
    ...game.state,
    player: {
      ...game.state.player,
      username,
      authToken,
    }
  };
};
