import * as PIXI from 'pixi.js';
import Keyboard from 'pixi.js-keyboard';
import SocketIoClient from './core/socket-io-client';
import AssetLoader from './core/asset-loader';
import UILayout from './entities/ui/ui-layout';
import ChatLog from './entities/ui/chat-log';
import ChatInput from './entities/ui/chat-input';

export default class Game {
  static instance;

  state = {
    user: {},
    chat: {
      inputMessage: '',
      messages: [],
    },
    log: {
      messages: []
    },
    entities: {},
  };

  constructor(containerElement) {
    Game.instance = this;
    this.socketIoClient = new SocketIoClient();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    this.pixiApp = new PIXI.Application({
      width: 320,
      height: 240,
      antialias: false,
      resolution: window.innerHeight / 240,
    });
    this.pixiApp.view.addEventListener('contextmenu', (event) => {
      window.wasRightClick = true;
      event.preventDefault();
    });
    containerElement.appendChild(this.pixiApp.view);
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
      this.pixiApp.ticker.add(this.update);
      this.addEntity(new UILayout());
      this.addEntity(new ChatLog());
      this.addEntity(new ChatInput());
    });
  };

  update = (deltaTime) => {
    Object.keys(this.state.entities).forEach(entityId => this.state.entities[entityId].update(deltaTime));
    Keyboard.update();
  };
}
