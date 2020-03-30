import Game from '../index';
import InventoryContext from './inventory-context';

export default class PlayerContext {
  inventory = new InventoryContext(this);

  getUsername = () => {
    return Game.instance.state.player.username;
  };

  getAuthToken = () => {
    return Game.instance.state.player.authToken;
  };

  getSkinColor = () => {
    return Game.instance.state.player.skinColor || 0xffffff;
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

  interact = () => {

  };
}
