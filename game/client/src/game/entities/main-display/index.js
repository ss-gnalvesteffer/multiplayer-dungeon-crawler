import Entity from '../entity-base';
import PerspectiveDisplay from './perspective-display';

export default class MainDisplay extends Entity {
  constructor() {
    super();
    this.perspectiveDisplay = new PerspectiveDisplay();
  }

  update = (deltaTime) => {
    this.perspectiveDisplay.update(deltaTime);
  };
}
