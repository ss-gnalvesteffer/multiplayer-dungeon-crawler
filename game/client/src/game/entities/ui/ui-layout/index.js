import { Sprite, Loader } from 'pixi.js';
import assetManifest from '../../../../../assets/asset-manifest';
import Entity from '../../entity-base';

export default class UILayout extends Entity {
  constructor() {
    super();
    this.sprite = new Sprite(Loader.shared.resources[assetManifest.ui.layout_texture_path].texture);
    this.addToStage(this.sprite);
  }
}
