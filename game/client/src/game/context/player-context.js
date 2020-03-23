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
    Game.instance.socketIoClient.emit('turn-left', {
      authToken: this.getAuthToken(),
    });
  };

  turnRight = () => {
    Game.instance.socketIoClient.emit('turn-right', {
      authToken: this.getAuthToken(),
    });
  };

  moveForward = () => {
    Game.instance.socketIoClient.emit('move-forward', {
      authToken: this.getAuthToken(),
    });
  };

  moveBackward = () => {
    Game.instance.socketIoClient.emit('move-backward', {
      authToken: this.getAuthToken(),
    });
  };
}

export default PlayerContext;
