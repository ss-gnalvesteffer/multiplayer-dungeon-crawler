const genericAuth = async ({message, gameServer}) => {
  return await gameServer.accountService.isValidAuthToken(message.data.auth.username, message.data.auth.authToken)
};

const messageHandlerMetadata = {
  'chat': {
    isAuthorized: async () => true, // auth handled internally
    handler: require('./chat'),
  },
  'turn': {
    isAuthorized: genericAuth,
    handler: require('./turn'),
  },
};

module.exports = messageHandlerMetadata;
