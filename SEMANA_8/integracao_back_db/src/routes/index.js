//vai agrupar as rotas
const { Router } = require('express');
const categoryRoutes = require('./categoryRoutes');

const routes = Router();

routes.use('/api', categoryRoutes);

module.exports = routes;
