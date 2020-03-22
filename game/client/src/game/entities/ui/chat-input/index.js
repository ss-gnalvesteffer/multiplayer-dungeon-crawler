import Keyboard from 'pixi.js-keyboard';
import Entity from '../../entity-base';
import Text from '../text';
import Game from '../../../index';
import chatInputKeyCodesToStrings from './chat-input-key-codes-to-strings';

const maxMessageLength = 45;
const xPosition = 2;
const yPosition = 233;

export default class ChatInput extends Entity {
  constructor() {
    super();
    this.playerNameText = new Text('', {fill: '#000000'});
    this.playerNameText.position.set(xPosition, yPosition);
    this.addToStage(this.playerNameText);

    this.inputMessageText = new Text('', {fill: '#0000ff'});
    this.addToStage(this.inputMessageText);
  }

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
    } else if (Keyboard.isKeyPressed('Enter') && chatState.inputMessage) {
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
    this.inputMessageText.position.set(this.playerNameText.width, yPosition);
  };
}
