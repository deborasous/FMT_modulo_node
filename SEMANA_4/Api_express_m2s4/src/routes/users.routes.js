const express = require('express');
const usersRoutes = express.Router();
const {
  updatData,
  generateDate,
  filterData,
  changeSingleData,
  deleteUser,
} = require('../controller/users.controller');

usersRoutes.get('/date/:month', generateDate);
usersRoutes.patch('/nomes', updatData);
usersRoutes.put('/user/:id', changeSingleData);
usersRoutes.get('/user', filterData);
usersRoutes.delete('/user/:id', deleteUser);

module.exports = usersRoutes;
