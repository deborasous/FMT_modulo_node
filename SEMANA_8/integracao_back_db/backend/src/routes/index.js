//vai agrupar as rotas
const { Router } = require('express');
const categoryRoutes = require('./category.routes');
const traineeFromRouter = require('./trainees.routes');
const companyRoutes = require('./companies.routes');
const contractRoutes = require('./contracts.routes');
const userRoutes = require('./user.routes');
const rbacRoutes = require('./rbac.routes');
const routes = Router();

routes.use(
  '/api',
  categoryRoutes,
  traineeFromRouter,
  companyRoutes,
  contractRoutes,
  userRoutes,
  rbacRoutes
);

module.exports = routes;
