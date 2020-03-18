const initializePixi = () => {
  const type = PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas';
  PIXI.utils.sayHello(type);

  const app = new PIXI.Application({
    width: 320,
    height: 200,
    resolution: 3,
  });
  document.querySelector('.canvas-container').appendChild(app.view);
};

export default initializePixi;