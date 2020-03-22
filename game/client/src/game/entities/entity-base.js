import { v4 } from 'uuid';
import Game from '../index';

export default class Entity {
  id = v4();
  graphics = {};

  addToStage = (graphic) => {
    Game.instance.pixiApp.stage.addChild(graphic);
    this.graphics[graphic] = graphic;
  };

  removeFromStage = (graphic) => {
    Game.instance.pixiApp.stage.removeChild(graphic);
    delete this.graphics[graphic];
  };

  destroy = () => {
    Object.keys(this.graphics).forEach(this.removeFromStage);
  };

  update = () => {

  }
}
