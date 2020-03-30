import * as PIXI from 'pixi.js';
import Entity from '../../entity-base';
import Text from '../../ui/core/text';
import { getDirectionText } from '../../../models/direction';

export default class PerspectiveDisplay extends Entity {
  constructor() {
    super();

    this.colorMatrixFilter = new PIXI.filters.ColorMatrixFilter();
    this.colorMatrixFilter.resolution = this.getGame().resolution;
    this.container.filters = [this.colorMatrixFilter];

    this.backgroundSprite = new PIXI.Sprite();
    this.addDrawable(this.backgroundSprite);

    this.groundSprite = new PIXI.Sprite();
    this.addDrawable(this.groundSprite);

    this.backWallLeftSprite = new PIXI.Sprite();
    this.addDrawable(this.backWallLeftSprite);
    this.backWallMiddleSprite = new PIXI.Sprite();
    this.addDrawable(this.backWallMiddleSprite);
    this.backWallRightSprite = new PIXI.Sprite();
    this.addDrawable(this.backWallRightSprite);
    this.leftWallSprite = new PIXI.Sprite();
    this.addDrawable(this.leftWallSprite);
    this.rightWallSprite = new PIXI.Sprite();
    this.addDrawable(this.rightWallSprite);
    this.frontWallSprite = new PIXI.Sprite();
    this.addDrawable(this.frontWallSprite);

    this.infoText = new Text('', {scale: 0.75, fill: '#ffffff', align: 'center'});
    this.infoText.anchor.set(0.5, 0);
    this.infoText.position.set(205 / 2, 2);
    this.addDrawable(this.infoText);
  }

  update = () => {
    const game = this.getGame();
    const time = game.state.time;

    // torch flicker
    this.colorMatrixFilter.brightness(1 + (Math.sin(time * 0.025) * 0.1) + (Math.cos(time * 0.3) * 0.05) + Math.random() * 0.15, false);

    // update map
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

    this.infoText.text = `${game.state.player.mapId}\n${getDirectionText(game.state.player.direction)}\nX:${game.state.player.position.x} Y:${game.state.player.position.y}`;
  };
}
