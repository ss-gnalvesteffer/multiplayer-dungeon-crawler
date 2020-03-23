import Game from '../index';

class UIContext {
  getRelativeMousePosition = () => {
    const pixiApp = Game.instance.pixiApp;
    const mouseInteractionData = pixiApp.renderer.plugins.interaction.mouse;
    return {x: mouseInteractionData.global.x, y: mouseInteractionData.global.y};
  };
}

export default UIContext;
