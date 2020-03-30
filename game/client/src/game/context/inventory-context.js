import Game from '../index';

export default class InventoryContext {
  constructor(playerContext) {
    this.game = Game.instance;
    this.player = playerContext;
  }

  isInventoryOpen = () => {
    return this.game.state.ui.isInventoryOpen;
  };

  toggleInventoryUI = () => {
    this.game.state.ui.isInventoryOpen = !this.game.state.ui.isInventoryOpen;
  };
}
