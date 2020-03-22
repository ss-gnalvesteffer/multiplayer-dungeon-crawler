import { v4 } from 'uuid';
import Game from '../index';
import { Loader } from 'pixi.js';

export default class Entity {
  id = v4();
  graphics = {};

  getTexture = (texturePath) => {
    return Loader.shared.resources[texturePath].texture;
  };

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
