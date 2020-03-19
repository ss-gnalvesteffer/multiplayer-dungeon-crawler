const AccountService = require('../../../../game/account/account-service');

module.exports = ({message, sendChatMessage, socket, redisClient}) => {
  if (message.length !== 2) {
    sendChatMessage('[SYSTEM]', 'Invalid usage. Type "::login USERNAME PASSWORD"');
    return;
  }
  sendChatMessage('[SYSTEM]', 'Attempting to login...');
  const [username, password] = message;
  new AccountService({socket, redisClient}).login(
    username,
    password,
    () => {
      console.log(`${username} logged in`);
      sendChatMessage('[SYSTEM]', 'Successfully logged in!');
    },
    () => {
      console.log(`failed attempted login to ${username}`);
      sendChatMessage('[SYSTEM]', 'Login failed.');
    }
  );
};
