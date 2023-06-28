const {
  getAllCategories,
  createCategory,
} = require('../controllers/category.controller');
const { Router } = require('express');

class CategoryRouter {
  router() {
    const categoryRoutes = Router();

    categoryRoutes.post('/criarCategoria', createCategory);
    categoryRoutes.get('/listarCategorias', getAllCategories);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter().router();
