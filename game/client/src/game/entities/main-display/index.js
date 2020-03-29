import * as PIXI from 'pixi.js';
import Text from '../ui/core/text';
import Entity from '../entity-base';
import { getDirectionText } from '../../models/direction';

export default class MainDisplay extends Entity {
  constructor() {
    super();

    this.backgroundSprite = new PIXI.Sprite();
    this.addToStage(this.backgroundSprite);

    this.groundSprite = new PIXI.Sprite();
    this.addToStage(this.groundSprite);

    this.backWallLeftSprite = new PIXI.Sprite();
    this.addToStage(this.backWallLeftSprite);
    this.backWallMiddleSprite = new PIXI.Sprite();
    this.addToStage(this.backWallMiddleSprite);
    this.backWallRightSprite = new PIXI.Sprite();
    this.addToStage(this.backWallRightSprite);
    this.leftWallSprite = new PIXI.Sprite();
    this.addToStage(this.leftWallSprite);
    this.rightWallSprite = new PIXI.Sprite();
    this.addToStage(this.rightWallSprite);
    this.frontWallSprite = new PIXI.Sprite();
    this.addToStage(this.frontWallSprite);

    this.directionText = new Text('', {scale: 0.75, fill: '#ffffff', align: 'center'});
    this.directionText.anchor.set(0.5, 0);
    this.directionText.position.set(205 / 2, 2);
    this.addToStage(this.directionText);
  }

  update = () => {
    const game = this.getGame();

    this.backgroundSprite.texture = this.getTexture(game.context.map.getBackgroundTexturePath());

    const wallVisibilityFlags = game.context.map.getWallVisibilityFlags();
    const wallTexturePaths = game.context.map.getWallTexturePaths();
    this.backWallLeftSprite.texture = this.getTexture(wallTexturePaths.wall_back_left_texture_path);
    this.backWallLeftSprite.visible = wallVisibilityFlags.backWallLeft;
    this.backWallMiddleSprite.texture = this.getTexture(wallTexturePaths.wall_back_middle_texture_path);
    this.backWallMiddleSprite.visible = wallVisibilityFlags.backWallMiddle;
    this.backWallRightSprite.texture = this.getTexture(wallTexturePaths.wall_back_right_texture_path);
    this.backWallRightSprite.visible = wallVisibilityFlags.backWallRight;
    this.leftWallSprite.texture = this.getTexture(wallTexturePaths.wall_left_texture_path);
    this.leftWallSprite.visible = wallVisibilityFlags.leftWall;
    this.rightWallSprite.texture = this.getTexture(wallTexturePaths.wall_right_texture_path);
    this.rightWallSprite.visible = wallVisibilityFlags.rightWall;
    this.frontWallSprite.texture = this.getTexture(wallTexturePaths.wall_front_texture_path);
    this.frontWallSprite.visible = wallVisibilityFlags.frontWall;

    this.directionText.text = `${game.state.player.mapId}\n${getDirectionText(game.state.player.direction)}\nX:${game.state.player.position.x} Y:${game.state.player.position.y}`;
  };
}
