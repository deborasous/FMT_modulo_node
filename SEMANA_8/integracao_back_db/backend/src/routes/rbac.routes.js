const {
  addOneRole,
  createOnePermission,
  addPermissionRole,
} = require('../controllers/rbac.controller');
const { Router } = require('express');

class ContractRouter {
  router() {
    const rbacRoutes = Router();

    rbacRoutes.post('/criarUmaFuncao', addOneRole);
    rbacRoutes.get('/criarUmaPermissao', createOnePermission);
    rbacRoutes.post('/adicionarPermissão', addPermissionRole);
    return rbacRoutes;
  }
}

module.exports = new ContractRouter().router();
