const { createOneUser, userLogin } = require('../controllers/user.controller');
const { Router } = require('express');

class UserRouter {
  router() {
    const userRoutes = Router();

    userRoutes.post('/criarUsuario', createOneUser);
    userRoutes.post('/entrar', userLogin);
    // userRoutes.get('/li/:id', listOneCompany);
    // userRoutes.put('/atualizarCompania/:id', updateCompany);

    return userRoutes;
  }
}

module.exports = new UserRouter().router();
