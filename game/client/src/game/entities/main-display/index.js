import Entity from '../entity-base';
import PerspectiveDisplay from './perspective-display';
import InventoryDisplay from './inventory-display';

export default class MainDisplay extends Entity {
  constructor() {
    super();
    this.perspectiveDisplay = new PerspectiveDisplay();
    this.inventoryDisplay = new InventoryDisplay();
  }

  update = (deltaTime) => {
    const inventoryContext = this.getContext().player.inventory;
    this.inventoryDisplay.container.visible = inventoryContext.isInventoryOpen();
    this.perspectiveDisplay.update(deltaTime);
    this.inventoryDisplay.update(deltaTime);
  };
}
