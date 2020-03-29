import * as PIXI from 'pixi.js';
import assetManifest from '../../../../assets/asset-manifest';
import EntityBase from '../entity-base';

export default class ModularCharacter extends EntityBase {
  constructor(equipment) {
    super();

    this.equipment = equipment;

    const characterAssets = assetManifest.character;
    this.headSprite = new PIXI.Sprite(this.getTexture(characterAssets.head.texture_path));
  }

  update() {

  }
}
