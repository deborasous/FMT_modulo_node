const { createOneUser, Login } = require('../controllers/user.controller');
const { Router } = require('express');
const { verifyToken } = require('../middleware/auth');

class UserRouter {
  router() {
    const userRoutes = Router();

    userRoutes.post('/criarUsuario', createOneUser);
    userRoutes.post('/login', Login);
    userRoutes.get('/recurso-protegido', verifyToken, (req, res) => {
      //verifica se o logged(definido em user.controller) é true, se sim, permite o acesso
      if (req.user.logged) {
        res.json({
          message: 'Acesso autorizado ao recurso protegido',
        });
      } else {
        res.status(401).json({
          message: 'Acesso não autorizado.',
        });
      }
    });

    return userRoutes;
  }
}

module.exports = new UserRouter().router();
