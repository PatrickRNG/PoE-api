const { PORT } = require('./config');
const VError = require('verror');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { createListeners } = require('../helpers/mongo');

const app = express();

function init(routes) {
  initServer(routes);
  initMongo();
}

function initServer(routes) {
  app.use(helmet());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(routes);
  app.listen(PORT, () => console.log(`server initialized on port ${PORT}`));
}

function initMongo() {
  mongoose.connect('mongodb://localhost:27017/users', {
    socketTimeoutMS: 0,
    reconnectTries: 50,
    reconnectInterval: 3000,
    keepAlive: true,
    keepAliveInitialDelay: 200000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const connection = mongoose.connection;
  createListeners(connection);
}

module.exports = init;