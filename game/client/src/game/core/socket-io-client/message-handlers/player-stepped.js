import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
  const {position} = data;
  game.state.player = {
    ...game.state.player,
    position,
  };
};
