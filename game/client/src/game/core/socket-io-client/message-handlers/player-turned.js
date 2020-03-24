import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
  const {direction} = data;
  game.state.player = {
    ...game.state.player,
    direction,
  };
};
