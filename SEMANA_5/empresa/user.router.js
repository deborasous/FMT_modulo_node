const express = require('express');
const usersRoutes = express();
const { createUser, getUsers } = require('./user.controller');

usersRoutes.post('/user', createUser);
usersRoutes.get('/listuser', getUsers);

module.exports = usersRoutes;
