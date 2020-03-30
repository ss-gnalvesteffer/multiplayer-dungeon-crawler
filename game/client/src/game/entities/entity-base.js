import * as PIXI from 'pixi.js';
import { v4 } from 'uuid';
import Game from '../index';
import { Loader } from 'pixi.js';

export default class Entity {
  id = v4();
  entities = {};

  constructor(container) {
    this.container = container || new PIXI.Container();
    this.getGame().pixiApp.stage.addChild(this.container);
  }

  getGame = () => {
    return Game.instance;
  };

  getContext = () => {
    return this.getGame().context;
  };

  getTexture = (texturePath) => {
    return Loader.shared.resources[texturePath].texture;
  };

  addDrawable = (entity) => {
    const game = this.getGame();
    if (entity instanceof Entity) {
      game.state.entities[entity.id] = entity;
    } else {
      this.container.addChild(entity);
    }
    this.entities[entity] = entity;
  };

  removeFromStage = (entity) => {
    const game = this.getGame();
    if (entity instanceof Entity) {
      delete game.state.entities[entity.id];
    } else {
      game.pixiApp.stage.removeChild(entity);
    }
    delete this.entities[entity];
  };

  destroy = () => {
    Object.keys(this.entities).forEach(this.removeFromStage);
  };

  update = () => {

  }
}
