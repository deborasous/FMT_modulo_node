const express = require('express');
const routes = express.Router();
const { listNames, updatData } = require('../controller/controller');

routes.patch('/nomes', updatData);

module.exports = routes;
