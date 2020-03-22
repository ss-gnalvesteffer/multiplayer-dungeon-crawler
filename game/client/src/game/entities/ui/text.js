import * as PIXI from 'pixi.js';
const PixiText = PIXI.Text;
const TextStyle = PIXI.TextStyle;

class Text extends PixiText {
  constructor(string, {scale = 0.75, fill = '#000000'}) {
    super(string, new TextStyle({
      fontFamily: "game",
      fontSize: 8,
      fill: fill,
    }));
    this.scale.set(scale);
  }
}

export default Text;
