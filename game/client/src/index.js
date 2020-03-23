import webFontLoader from 'webfontloader';
import Game from './game'

webFontLoader.load({
  custom: {
    families: ['game'],
  },
  active: () => new Game(document.getElementById('pixi-canvas')).start(),
});
