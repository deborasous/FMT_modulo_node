const {
  getAllCategories,
  createCategory,
  updateOneCategory,
} = require('../controllers/category.controller');
const { Router } = require('express');

class CategoryRouter {
  router() {
    const categoryRoutes = Router();

    categoryRoutes.post('/criarCategoria', createCategory);
    categoryRoutes.get('/listarCategorias', getAllCategories);
    categoryRoutes.get('/alterarCategoria/:id', updateOneCategory);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter().router();
