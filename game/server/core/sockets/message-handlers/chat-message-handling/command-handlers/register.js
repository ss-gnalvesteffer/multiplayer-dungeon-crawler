const AccountService = require('../../../../game/account/account-service');

module.exports = ({message, sendChatMessage, socket, redisClient}) => {
  if (message.length !== 2) {
    sendChatMessage('[SYSTEM]', 'Invalid usage. Type "::register USERNAME PASSWORD"');
    return;
  }
  sendChatMessage('[SYSTEM]', 'Attempting to register...');
  const [username, password] = message;
  new AccountService({socket, redisClient}).register(
    username,
    password,
    () => {
      sendChatMessage('[SYSTEM]', 'Account created!');
    },
    (errorMessage) => {
      sendChatMessage('[SYSTEM]', `Registration failed: ${errorMessage}.`);
    }
  );
};
