import Entity from '../../entity-base';
import * as Mouse from 'pixi.js-mouse';

const isPositionWithinButtonBounds = (positionX, positionY, bounds) => {
  return (
    positionX >= bounds.left &&
    positionX <= bounds.right &&
    positionY >= bounds.top &&
    positionY <= bounds.bottom
  );
};

class Button extends Entity {
  constructor(positionX, positionY, width, height, onClick) {
    super();
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
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
    if (
      Mouse.isButtonPressed(Mouse.Button.LEFT) &&
      isPositionWithinButtonBounds(mousePosition.x, mousePosition.y, this.bounds)
    ) {
      this.onClick();
    }
  };
}

export default Button;
