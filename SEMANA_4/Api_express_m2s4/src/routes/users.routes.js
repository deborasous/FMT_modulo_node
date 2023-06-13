const express = require('express');
const usersRoutes = express.Router();
const {
  updatData,
  generateDate,
  filterData,
  changeSingleData,
  deleteUser,
  getUserName,
} = require('../controller/users.controller');

usersRoutes.get('/date/:month', generateDate);
usersRoutes.patch('/usernomes', updatData);
usersRoutes.get('/user', filterData);
usersRoutes.get('/user/:id', getUserName);
usersRoutes.put('/user/:id', changeSingleData);
usersRoutes.delete('/user/:id', deleteUser);

module.exports = usersRoutes;
