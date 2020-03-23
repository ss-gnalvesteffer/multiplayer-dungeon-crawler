import * as PIXI from 'pixi.js';
import Keyboard from 'pixi.js-keyboard';
import Mouse from 'pixi.js-mouse';
import SocketIoClient from './core/socket-io-client';
import AssetLoader from './core/asset-loader';
import UILayout from './entities/ui/ui-layout';
import ChatLog from './entities/ui/chat-log';
import ChatInput from './entities/ui/chat-input';
import MainDisplay from './entities/main-display';
import DIRECTION from './models/direction';
import Context from './context';

export default class Game {
  static instance;

  state = {
    player: {
      direction: DIRECTION.NORTH,
      position: {x: 0, y: 0, z: 0},
    },
    chat: {
      inputMessage: '',
      messages: [],
    },
    log: {
      messages: []
    },
    entities: {},
    map: {},
  };

  constructor(canvas) {
    Game.instance = this;
    this.context = new Context();
    this.socketIoClient = new SocketIoClient();
    this.resolution = window.devicePixelRatio * 8;
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    this.pixiApp = new PIXI.Application({
      width: 320,
      height: 240,
      antialias: false,
      resolution: this.resolution,
      view: canvas,
    });
    this.pixiApp.view.addEventListener('contextmenu', (event) => {
      window.wasRightClick = true;
      event.preventDefault();
    });
    this.assetLoader = new AssetLoader();
  }

  addEntity = (entity) => {
    this.state.entities[entity.id] = entity;
  };

  removeEntity = (entity) => {
    entity.destroy();
    delete this.state.entities[entity.id];
  };

  start = () => {
    this.assetLoader.loadAssets(() => {
      this.socketIoClient.start();
      this.addEntity(new MainDisplay());
      this.addEntity(new UILayout());
      this.addEntity(new ChatLog());
      this.addEntity(new ChatInput());
      this.pixiApp.ticker.add(this.update);
    });
  };

  update = (deltaTime) => {
    Object.keys(this.state.entities).forEach(entityId => this.state.entities[entityId].update(deltaTime));
    Keyboard.update();
    Mouse.update();
  };
}
