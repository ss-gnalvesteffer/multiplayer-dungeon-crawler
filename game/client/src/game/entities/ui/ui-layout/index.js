import { Sprite, Loader } from 'pixi.js';
import assetManifest from '../../../../../assets/asset-manifest';
import Entity from '../../entity-base';
import Game from '../../../index';

export default class UILayout extends Entity {
  initialize = () => {
    this.sprite = new Sprite(Loader.shared.resources[assetManifest.ui.layout_texture_path].texture);
    Game.instance.pixiApp.stage.addChild(this.sprite);
  };
}
