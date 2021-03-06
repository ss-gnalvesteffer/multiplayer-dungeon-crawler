import * as PIXI from 'pixi.js';
import Keyboard from 'pixi.js-keyboard';
import Mouse from 'pixi.js-mouse';
import SocketIoClient from './core/socket-io-client';
import AssetLoader from './core/asset-loader';
import UILayout from './entities/ui/ui-layout';
import ChatLog from './entities/ui/chat-log';
import ChatInput from './entities/ui/chat-input';
import MainDisplay from './entities/main-display';
import Context from './context';

export default class Game {
  static instance;

  state = {
    time: 0,
    player: {
      mapId: 'dungeon-0',
      position: {x: 1, y: 2},
      direction: 1,
      skinColor: 0xffffff,
    },
    chat: {
      inputMessage: '',
      messages: [],
    },
    ui: {
      isInventoryOpen: false,
    },
    entities: {},
  };

  constructor(canvas) {
    Game.instance = this;
    this.context = new Context();
    this.socketIoClient = new SocketIoClient();
    this.resolution = window.devicePixelRatio * 4;
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
    this.state.time += deltaTime;
    Keyboard.update();
    Mouse.update();
  };
}
