import { Text, TextStyle } from 'pixi.js';
import Keyboard from 'pixi.js-keyboard';
import Entity from '../../entity-base';
import Game from '../../../index';

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
const chatInputKeyCodesToStrings = {
  'Digit0': '0',
  'Shift-Digit0': ')',
  'Digit1': '1',
  'Shift-Digit1': '!',
  'Digit2': '2',
  'Shift-Digit2': '@',
  'Digit3': '3',
  'Shift-Digit3': '#',
  'Digit4': '4',
  'Shift-Digit4': '$',
  'Digit5': '5',
  'Shift-Digit5': '%',
  'Digit6': '6',
  'Shift-Digit6': '^',
  'Digit7': '7',
  'Shift-Digit7': '&',
  'Digit8': '8',
  'Shift-Digit8': '*',
  'Digit9': '9',
  'Shift-Digit9': '(',
  'Semicolon': ';',
  'Shift-Semicolon': ':',
  'Quote': '\'',
  'Shift-Quote': '"',
  'Backslash': '\\',
  'Shift-Backslash': '|',
  'Minus': '-',
  'Shift-Minus': '_',
  'Equal': '=',
  'Shift-Equal': '+',
  'KeyA': 'a',
  'KeyB': 'b',
  'KeyC': 'c',
  'KeyD': 'd',
  'KeyE': 'e',
  'KeyF': 'f',
  'KeyG': 'g',
  'KeyH': 'h',
  'KeyI': 'i',
  'KeyJ': 'j',
  'KeyK': 'k',
  'KeyL': 'l',
  'KeyM': 'm',
  'KeyN': 'n',
  'KeyO': 'o',
  'KeyP': 'p',
  'KeyQ': 'q',
  'KeyR': 'r',
  'KeyS': 's',
  'KeyT': 't',
  'KeyU': 'u',
  'KeyV': 'v',
  'KeyW': 'w',
  'KeyX': 'x',
  'KeyY': 'y',
  'KeyZ': 'z',
  'Space': ' ',
};

const maxMessageLength = 45;

export default class ChatInput extends Entity {
  initialize = () => {
    this.playerNameText = new Text('', new TextStyle({
      fontFamily: "game",
      fontSize: 6,
      fill: '#000000',
    }));
    this.playerNameText.position.set(2, 230);
    Game.instance.pixiApp.stage.addChild(this.playerNameText);

    this.inputMessageText = new Text('', new TextStyle({
      fontFamily: "game",
      fontSize: 6,
      fill: '#0000ff',
    }));
    Game.instance.pixiApp.stage.addChild(this.inputMessageText);
  };

  update = () => {
    const game = Game.instance;
    const chatState = game.state.chat;
    const username = game.state.user.username;

    if (username) {
      this.playerNameText.text = `${username}: `;
    } else {
      this.playerNameText.text = '';
    }

    // process input
    if (Keyboard.isKeyPressed('Backspace')) {
      chatState.inputMessage = chatState.inputMessage.substring(0, chatState.inputMessage.length - 1);
    } else if (Keyboard.isKeyPressed('Enter')) {
      game.socketIoClient.sendChatMessage(chatState.inputMessage);
      chatState.inputMessage = '';
    } else {
      const isShiftDown = Keyboard.isKeyDown('ShiftLeft') || Keyboard.isKeyDown('ShiftRight');
      Object.keys(chatInputKeyCodesToStrings).forEach((keyCode) => {
        if (Keyboard.isKeyPressed(keyCode)) {
          const string = chatInputKeyCodesToStrings[`${isShiftDown ? 'Shift-' : ''}${keyCode}`] || '';
          chatState.inputMessage = (chatState.inputMessage + string).substring(0, maxMessageLength);
        }
      });
    }

    this.inputMessageText.text = `${chatState.inputMessage}*`;
    this.inputMessageText.position.set(this.playerNameText.width, 230);
  };
}
