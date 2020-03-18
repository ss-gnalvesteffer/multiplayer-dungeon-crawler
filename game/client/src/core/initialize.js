import initializeSocket from './sockets/initialize.js';
import initializePixi from './pixi/initialize.js';

const initialize = () => {
  initializeSocket();
  initializePixi();
};

export default initialize;
