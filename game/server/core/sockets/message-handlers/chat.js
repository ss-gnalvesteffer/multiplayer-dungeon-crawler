const ChatMessageHandlingService = require('./chat-message-handling/chat-message-handling-service');

module.exports = async ({message, socketIo, socket, gameServer}) => {
  console.log(`[CHAT] ${message.data.username}: ${message.data.message}`);
  await new ChatMessageHandlingService({socketIo, socket, gameServer}).handleChatMessage(message.data);
};
