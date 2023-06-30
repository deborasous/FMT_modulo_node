const {
  createCompany,
  listCompanies,
  listOneCompany,
  updateCompany,
} = require('../controllers/companies.controller');
const { Router } = require('express');

class CompanyRouter {
  router() {
    const companyRoutes = Router();

    companyRoutes.post('/criarCompania', createCompany);
    companyRoutes.get('/listarCompania', listCompanies);
    companyRoutes.get('/listarUmaCompania/:id', listOneCompany);
    companyRoutes.put('/atualizarCompania/:id', updateCompany);

    return companyRoutes;
  }
}

module.exports = new CompanyRouter().router();
