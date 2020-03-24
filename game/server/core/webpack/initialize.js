module.exports = (gameServer) => {
  const app = gameServer.app;
  const isDev = process.argv[2] !== undefined;

  if (isDev) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../../../../webpack.config');

    webpackConfig.mode = 'development';
    //reload=true:Enable auto reloading when changing JS files or content
    //timeout=1000:Time from disconnecting from server to reconnecting
    webpackConfig.entry.index.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

    //Add HMR plugin
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(webpackConfig);

    //Enable "webpack-dev-middleware"
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    }));

    //Enable "webpack-hot-middleware"
    app.use(webpackHotMiddleware(compiler));
  }
};
