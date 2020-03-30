import Entity from '../../entity-base';
import ModularCharacter from '../../modular-character';

export default class InventoryDisplay extends Entity {
  constructor(container) {
    super(container);
    this.modularCharacter = new ModularCharacter(this.container);
    this.modularCharacter.setPosition(205 / 2, 164);
  }

  update = () => {
    this.modularCharacter.update();
    this.modularCharacter.setSkinColor(this.getContext().player.getSkinColor());
  };
}
