import * as PIXI from 'pixi.js';
import Text from '../ui/core/text';
import Entity from '../entity-base';
import { getDirectionText } from '../../models/direction';

export default class MainDisplay extends Entity {
  constructor() {
    super();
    this.skySprite = new PIXI.Sprite();
    this.addToStage(this.skySprite);

    const totalGroundSlices = 64;
    const horizonYPosition = 164 * 0.75;
    const fieldOfView = 90;
    this.groundSliceSprites = [];
    for (let groundSliceIndex = 0; groundSliceIndex < totalGroundSlices; ++groundSliceIndex) {
      const groundSliceSprite = new PIXI.Sprite();
      const groundSliceHeight = (horizonYPosition / totalGroundSlices) * groundSliceIndex;
      groundSliceSprite.anchor.set(0.5, 0);
      groundSliceSprite.position.set(205 / 2, horizonYPosition + groundSliceHeight); // FUN FACT: half of 82 is 41.
      groundSliceSprite.width = 205 + (groundSliceIndex * fieldOfView);
      groundSliceSprite.height = groundSliceIndex * groundSliceHeight;
      this.groundSliceSprites.push(groundSliceSprite);
      this.addToStage(groundSliceSprite);
    }

    this.directionText = new Text('', {scale: 0.75, fill: '#ffffff', align: 'center'});
    this.directionText.anchor.set(0.5, 0);
    this.directionText.position.set(205 / 2, 2);
    this.addToStage(this.directionText);
  }

  update = () => {
    const game = this.getGame();
    this.skySprite.texture = this.getTexture(game.context.map.getSkyTexturePath());
    this.updateGroundSliceSprites();
    this.directionText.text = `${getDirectionText(game.state.player.direction)}\nX:${game.state.player.position.x} Y:${game.state.player.position.y} Z:${game.state.player.position.z}`;
  };

  updateGroundSliceSprites = () => {
    const groundTexturePath = this.getContext().map.getGroundTexturePath();
    this.groundSliceSprites.forEach((groundSliceSprite) => {
      groundSliceSprite.texture = this.getTexture(groundTexturePath);
    });
  };
}
