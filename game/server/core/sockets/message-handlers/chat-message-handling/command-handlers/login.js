module.exports = ({message, sendChatMessage, socket}) => {
  if (message.length !== 2) {
    sendChatMessage('[SYSTEM]', 'Invalid usage. Type "::login USERNAME PASSWORD"');
    return;
  }
  sendChatMessage('[SYSTEM]', 'Attempting to login...');
  const [username, password] = message;
  global.gameServer.accountService.login(
    username,
    password,
    (authToken) => {
      global.gameServer.stateManager.loadPlayer();
      socket.emit('message', {
        type: 'login',
        data: {
          username,
          authToken,
        }
      });
      console.log(`${username} logged in`);
      sendChatMessage('[SYSTEM]', 'Successfully logged in!');
    },
    () => {
      console.log(`failed attempted login to ${username}`);
      sendChatMessage('[SYSTEM]', 'Login failed.');
    }
  );
};
