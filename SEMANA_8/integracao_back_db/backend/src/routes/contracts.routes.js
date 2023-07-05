const {
  createContract,
  listContracts,
  listOneContract,
  deactivateContract,
} = require('../controllers/contract.controller');
const { Router } = require('express');

class ContractRouter {
  router() {
    const contractRoutes = Router();

    contractRoutes.post('/criarContrato', createContract);
    contractRoutes.get('/listarContratos', listContracts);
    contractRoutes.get('/listarUmContrato/:id', listOneContract);
    contractRoutes.patch('/terminarContrato/:id', deactivateContract);

    return contractRoutes;
  }
}

module.exports = new ContractRouter().router();
