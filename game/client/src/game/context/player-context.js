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
    Game.instance.socketIoClient.sendMessage('turn-left', {
      authToken: this.getAuthToken(),
    });
  };

  turnRight = () => {
    Game.instance.socketIoClient.sendMessage('turn-right', {
      authToken: this.getAuthToken(),
    });
  };

  moveForward = () => {
    Game.instance.socketIoClient.sendMessage('move-forward', {
      authToken: this.getAuthToken(),
    });
  };

  moveBackward = () => {
    Game.instance.socketIoClient.sendMessage('move-backward', {
      authToken: this.getAuthToken(),
    });
  };
}

export default PlayerContext;
