import { Loader, Sprite } from 'pixi.js';
import assetManifest from '../../../../../assets/asset-manifest';
import Entity from '../../entity-base';
import Button from '../core/button';

export default class UILayout extends Entity {
  constructor() {
    super();
    const context = this.getContext();

    this.sprite = new Sprite(Loader.shared.resources[assetManifest.ui.layout_texture_path].texture);
    this.addToStage(this.sprite);

    this.moveForwardButton = new Button(251, 85, 23, 23, () => context.player.moveForward());
    this.addToStage(this.moveForwardButton);
    this.moveBackwardButton = new Button(251, 107, 23, 23, () => context.player.moveBackward());
    this.addToStage(this.moveBackwardButton);
    this.turnLeftButton = new Button(229, 107, 23, 23, () => context.player.turnLeft());
    this.addToStage(this.turnLeftButton);
    this.turnRight = new Button(273, 107, 23, 23, () => context.player.turnRight());
    this.addToStage(this.turnRight);
  }
}
