import * as PIXI from 'pixi.js';
import * as Mouse from 'pixi.js-mouse';
import Entity from '../../entity-base';

const isPositionWithinButtonBounds = (positionX, positionY, bounds) => {
  return (
    positionX >= bounds.left &&
    positionX <= bounds.right &&
    positionY >= bounds.top &&
    positionY <= bounds.bottom
  );
};

class Button extends Entity {
  constructor(x, y, width, height, onClick, spriteX, spriteY, inactiveTexture, activeTexture, isActive = () => false) {
    super();
    this.positionX = x;
    this.positionY = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
    if (inactiveTexture) {
      this.inactiveSprite = new PIXI.Sprite(inactiveTexture);
      this.inactiveSprite.position.set(spriteX, spriteY);
      this.addDrawable(this.inactiveSprite);
    }
    if (activeTexture) {
      this.activeSprite = new PIXI.Sprite(activeTexture);
      this.activeSprite.position.set(spriteX, spriteY);
      this.addDrawable(this.activeSprite);
    }
    this.isActive = isActive;
  }

  get bounds() {
    return {
      top: this.positionY,
      bottom: this.positionY + this.height,
      left: this.positionX,
      right: this.positionX + this.width,
    };
  }

  update = () => {
    const context = this.getContext();
    const mousePosition = context.ui.getRelativeMousePosition();
    if (isPositionWithinButtonBounds(mousePosition.x, mousePosition.y, this.bounds)) {
      if (Mouse.isButtonPressed(Mouse.Button.LEFT)) {
        this.onClick();
      }
    }
    if (this.activeSprite) {
      const isActive = this.isActive();
      this.inactiveSprite.visible = !isActive;
      this.activeSprite.visible = isActive;
    }
  };
}

export default Button;
