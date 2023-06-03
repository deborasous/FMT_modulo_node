const express = require('express');
const usersRoutes = express.Router();
const { updatData, generateDate } = require('../controller/users.controller');

usersRoutes.patch('/nomes', updatData);
usersRoutes.get('/date/:month', generateDate);

module.exports = usersRoutes;
