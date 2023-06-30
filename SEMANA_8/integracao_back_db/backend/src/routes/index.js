//vai agrupar as rotas
const { Router } = require('express');
const categoryRoutes = require('./category.routes');
const traineeFromRouter = require('./trainees.routes');
const companyRoutes = require('./companies.routes');

const routes = Router();

routes.use('/api', categoryRoutes, traineeFromRouter, companyRoutes);

module.exports = routes;
