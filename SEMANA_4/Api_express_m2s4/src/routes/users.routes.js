const express = require('express');
const usersRoutes = express.Router();
const { updatData, generateDate,filterData, changeSingleData } = require('../controller/users.controller');

usersRoutes.get('/date/:month', generateDate);
usersRoutes.patch('/nomes', updatData);
usersRoutes.put('/user/:id', changeSingleData);
usersRoutes.get('/user', filterData)

module.exports = usersRoutes;
