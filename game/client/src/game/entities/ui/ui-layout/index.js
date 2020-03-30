import { Loader, Sprite } from 'pixi.js';
import assetManifest from '../../../../../assets/asset-manifest';
import Entity from '../../entity-base';
import Button from '../core/button';

export default class UILayout extends Entity {
  constructor() {
    super();
    const context = this.getContext();

    this.sprite = new Sprite(Loader.shared.resources[assetManifest.ui.layout_texture_path].texture);
    this.addDrawable(this.sprite);

    const buttonAssets = assetManifest.ui.buttons;

    this.interactButton = new Button(
      231,
      85,
      20,
      20,
      () => context.player.interact(),
      229,
      85,
      this.getTexture(buttonAssets.interact.inactive_texture_path),
      this.getTexture(buttonAssets.interact.active_texture_path)
    );
    this.addDrawable(this.interactButton);

    this.moveForwardButton = new Button(
      253,
      85,
      20,
      20,
      () => context.player.moveForward(),
      251,
      85,
      this.getTexture(buttonAssets.move_forward.inactive_texture_path),
      this.getTexture(buttonAssets.move_forward.active_texture_path)
    );
    this.addDrawable(this.moveForwardButton);

    this.inventoryButton = new Button(
      275,
      85,
      20,
      20,
      () => context.player.inventory.toggleInventoryUI(),
      273,
      85,
      this.getTexture(buttonAssets.inventory.inactive_texture_path),
      this.getTexture(buttonAssets.inventory.active_texture_path),
      () => context.player.inventory.isInventoryOpen()
    );
    this.addDrawable(this.inventoryButton);

    this.turnLeftButton = new Button(
      231,
      107,
      20,
      20,
      () => context.player.turnLeft(),
      229,
      107,
      this.getTexture(buttonAssets.turn_left.inactive_texture_path),
      this.getTexture(buttonAssets.turn_left.active_texture_path)
    );
    this.addDrawable(this.turnLeftButton);

    this.moveBackwardButton = new Button(
      253,
      107,
      20,
      20,
      () => context.player.moveBackward(),
      251,
      107,
      this.getTexture(buttonAssets.move_backward.inactive_texture_path),
      this.getTexture(buttonAssets.move_backward.active_texture_path)
    );
    this.addDrawable(this.moveBackwardButton);

    this.turnRightButton = new Button(
      275,
      107,
      20,
      20,
      () => context.player.turnRight(),
      273,
      107,
      this.getTexture(buttonAssets.turn_right.inactive_texture_path),
      this.getTexture(buttonAssets.turn_right.active_texture_path)
    );
    this.addDrawable(this.turnRightButton);
  }
}
