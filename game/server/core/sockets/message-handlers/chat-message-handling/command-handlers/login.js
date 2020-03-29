const PlayerService = require('../../../../game/player/player-service');

module.exports = async ({message, sendChatMessage, socket, gameServer}) => {
  if (message.length !== 2) {
    sendChatMessage('[SYSTEM]', 'Invalid usage. Type "::login USERNAME PASSWORD"');
    return;
  }
  sendChatMessage('[SYSTEM]', 'Attempting to login...');
  const [username, password] = message;
  const authToken = await gameServer.accountService.login(username, password);
  if (authToken) {
    const playerService = new PlayerService({gameServer, username});
    socket.emit('message', {
      type: 'login',
      data: {
        username,
        authToken,
        playerData: await playerService.getPlayerData(),
      },
    });
    console.log(`${username} logged in`);
    sendChatMessage('[SYSTEM]', 'Successfully logged in!');
    return;
  }
  console.log(`failed attempted login to ${username}`);
  sendChatMessage('[SYSTEM]', 'Login failed.');
};
