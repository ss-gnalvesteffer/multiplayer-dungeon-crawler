import ChatContext from './chat-context';
import PlayerContext from './player-context';
import UIContext from './ui-context';
import MapContext from './map-context';

class Context {
  constructor() {
    this.chat = new ChatContext();
    this.player = new PlayerContext();
    this.ui = new UIContext();
    this.map = new MapContext();
  }
}

export default Context;
