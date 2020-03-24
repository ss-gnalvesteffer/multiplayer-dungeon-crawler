import Game from '../index';

class PlayerContext {
  getUsername = () => {
    return Game.instance.state.player.username;
  };

  getAuthToken = () => {
    return Game.instance.state.player.authToken;
  };

  getPosition = () => {
    return Game.instance.state.player.position;
  };

  getDirection = () => {
    return Game.instance.state.player.direction;
  };

  turnLeft = () => {
    Game.instance.socketIoClient.sendMessage('turn', {
      amount: -1,
    });
  };

  turnRight = () => {
    Game.instance.socketIoClient.sendMessage('turn', {
      amount: 1,
    });
  };

  moveForward = () => {
    Game.instance.socketIoClient.sendMessage('step', {
      amount: 1,
    });
  };

  moveBackward = () => {
    Game.instance.socketIoClient.sendMessage('step', {
      amount: -1,
    });
  };
}

export default PlayerContext;
