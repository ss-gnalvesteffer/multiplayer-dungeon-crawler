import * as PIXI from 'pixi.js';
import Text from '../ui/core/text';
import assetManifest from '../../../../assets/asset-manifest';
import Entity from '../entity-base';
import { getDirectionText } from '../../models/direction';

export default class MainDisplay extends Entity {
  constructor() {
    super();
    this.sprite = new PIXI.Sprite(this.getTexture(assetManifest.environment.grassland.base_texture_path));
    this.addToStage(this.sprite);

    this.directionText = new Text('', { scale: 1, fill: '#ffffff', align: 'center'});
    this.directionText.anchor.set(0.5, 0);
    this.directionText.position.set(205 / 2, 2);
    this.addToStage(this.directionText);
  }

  update = () => {
    const game = this.getGame();
    this.directionText.text = `${getDirectionText(game.state.player.direction)}\nX:${game.state.player.position.x} Y:${game.state.player.position.y} Z:${game.state.player.position.z}`;
  };
}
