import Entity from '../../entity-base';
import ChatMessage from '../chat-message';

const xPosition = 2;
const yPosition = 230;
const messageHeight = 6;
const totalMessagesToDisplay = 12;

export default class ChatLog extends Entity {
  chatMessages = [];

  constructor() {
    super();
    for (let messageIndex = 0; messageIndex < totalMessagesToDisplay; ++messageIndex) {
      this.chatMessages.push(new ChatMessage(messageIndex, xPosition, yPosition + (messageHeight * -messageIndex)));
    }
  }

  update = () => {
    this.chatMessages.forEach(chatMessage => chatMessage.update());
  };
}
