import * as PIXI from 'pixi.js';
import Text from '../ui/core/text';
import Entity from '../entity-base';
import { getDirectionText } from '../../models/direction';

export default class MainDisplay extends Entity {
  constructor() {
    super();

    const horizonYPosition = 121;

    this.skySprite = new PIXI.Sprite();
    this.skySprite.anchor.set(0, 1);
    this.skySprite.position.set(0, horizonYPosition);
    this.addToStage(this.skySprite);

    this.groundSprite = new PIXI.Sprite();
    this.addToStage(this.groundSprite);

    this.fogSprite = new PIXI.Sprite();
    this.fogSprite.position.set(0, horizonYPosition);
    this.addToStage(this.fogSprite);

    this.directionText = new Text('', {scale: 0.75, fill: '#ffffff', align: 'center'});
    this.directionText.anchor.set(0.5, 0);
    this.directionText.position.set(205 / 2, 2);
    this.addToStage(this.directionText);
  }

  update = () => {
    const game = this.getGame();
    this.skySprite.texture = this.getTexture(game.context.map.getSkyTexturePath());
    this.groundSprite.texture = this.getTexture(game.context.map.getGroundTexturePath());
    this.fogSprite.texture = this.getTexture(game.context.map.getFogTexturePath());
    this.directionText.text = `${getDirectionText(game.state.player.direction)}\nX:${game.state.player.position.x} Y:${game.state.player.position.y} Z:${game.state.player.position.z}`;
  };
}
