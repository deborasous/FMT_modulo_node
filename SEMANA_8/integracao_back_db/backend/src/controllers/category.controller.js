const { Category } = require('../models/category');

class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;

    const categoryData = await Category.create({ name });

    return res.status(201).send(categoryData);
  }

  async getAllCategories(req, res) {
    const categoryData = await Category.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).send(categoryData);
  }

  async updateOneCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    await Category.update({ name }, { where: { id } });

    return res.status(204).send();
  }
}

module.exports = new CategoryController();
