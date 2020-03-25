import * as PIXI from 'pixi.js';

const PixiText = PIXI.Text;
const TextStyle = PIXI.TextStyle;

class Text extends PixiText {
  constructor(string, options) {
    const {scale = 0.75, fill = '#000000', align = 'left'} = options || {};
    super(string, new TextStyle({
      fontFamily: "game",
      fontSize: 8,
      fill: fill,
      align,
    }));
    this.scale.set(scale);
  }
}

export default Text;
