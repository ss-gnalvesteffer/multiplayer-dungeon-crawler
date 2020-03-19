const express = require('express');
const app = express();
const http = require('http').createServer(app);
const redisClient = require('redis').createClient();

require('./core/webpack/initialize')({app});
require('./core/http/initialize')({http, app, redisClient});
require('./core/sockets/initialize')({http, redisClient});
