const {
  createContract,
  listContracts,
  listOneContract,
  deactivateContract,
} = require('../controllers/contract.controller');
const { Router } = require('express');
const { checkUserRole } = require('../middleware/checkUserRole');
const { verifyToken } = require('../middleware/auth');

class ContractRouter {
  router() {
    const contractRoutes = Router();

    contractRoutes.post(
      '/criarContrato',
      verifyToken,
      checkUserRole,
      createContract
    );
    contractRoutes.get(
      '/listarContratos',
      verifyToken,
      checkUserRole,
      listContracts
    );
    contractRoutes.get(
      '/listarUmContrato/:id',
      verifyToken,
      checkUserRole,
      listOneContract
    );
    contractRoutes.patch(
      '/terminarContrato/:id',
      verifyToken,
      checkUserRole,
      deactivateContract
    );

    return contractRoutes;
  }
}

module.exports = new ContractRouter().router();
