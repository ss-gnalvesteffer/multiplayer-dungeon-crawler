import Text from '../core/text';
import Entity from '../../entity-base';
import Game from '../../../index';

export default class ChatMessage extends Entity {
  constructor(messageIndex, x, y) {
    super();
    this.messageIndex = messageIndex;
    this.position = {x, y};
    this.usernameText = new Text('', {fill: '#000000'});
    this.usernameText.position.set(x, y);
    this.addDrawable(this.usernameText);

    this.messageText = new Text('', {fill: '#600000'});
    this.addDrawable(this.messageText);
  }

  update = () => {
    const game = Game.instance;
    const messages = game.state.chat.messages;
    const messageIndex = messages.length - this.messageIndex;
    if (messageIndex >= 0 && messageIndex < messages.length) {
      const {username, message} = messages[messageIndex];
      this.usernameText.text = `${username}: `;
      this.messageText.text = message;
    } else {
      this.usernameText.text = '';
      this.messageText.text = '';
    }
    this.messageText.position.set(this.usernameText.width, this.position.y);
  };
}
