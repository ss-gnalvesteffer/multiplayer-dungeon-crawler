import Game from '../../../index';

export default (data) => {
  const game = Game.instance;
  const {username, authToken, playerData} = data;
  game.state.player = {
    ...game.state.player,
    username,
    authToken,
    mapId: playerData.mapId,
    position: playerData.position,
    direction: playerData.direction,
  };
};
