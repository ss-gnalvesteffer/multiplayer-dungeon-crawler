import { Sprite } from 'pixi.js';
import assetManifest from '../../../../assets/asset-manifest';
import Entity from '../entity-base';

export default class MainDisplay extends Entity {
  constructor() {
    super();
    this.sprite = new Sprite(this.getTexture(assetManifest.environment.grassland.base_texture_path));
    this.addToStage(this.sprite);
  }
}
