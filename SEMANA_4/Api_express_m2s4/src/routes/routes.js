const express = require('express');
const routes = express.Router();
const {  updatData, generateDate } = require('../controller/controller');

routes.patch('/nomes', updatData);
routes.get('/date/:month', generateDate);

module.exports = routes;
