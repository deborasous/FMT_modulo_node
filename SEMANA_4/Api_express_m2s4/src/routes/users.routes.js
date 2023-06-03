const express = require('express');
const usersRoutes = express.Router();
const { updatData, generateDate,filterData } = require('../controller/users.controller');

usersRoutes.patch('/nomes', updatData);
usersRoutes.get('/date/:month', generateDate);
usersRoutes.get('/user', filterData)

module.exports = usersRoutes;
