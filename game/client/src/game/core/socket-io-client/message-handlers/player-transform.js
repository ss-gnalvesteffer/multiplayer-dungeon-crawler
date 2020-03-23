import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
  const {direction, position} = data;
  game.state.player = {
    ...game.state.player,
    direction,
    position,
  };
};
