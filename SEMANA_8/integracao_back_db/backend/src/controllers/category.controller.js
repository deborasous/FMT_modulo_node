const { Category } = require('../models/category');

class CategoryController {
  async createCategory(req, res) {
    try {
      const { name } = req.body;

      const categoryData = await Category.create({ name });

      return res.status(201).send(categoryData);
    } catch (error) {
      return res
        .status(400)
        .send({ message: 'Não foi possível criar actegoria' });
    }
  }

  async getAllCategories(req, res) {
    const categoryData = await Category.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).send(categoryData);
  }

  async listOnecategory(req, res) {
    const { authorization } = req.headers;

    if (authorization === 'chocolate') {
      const { id } = req.params;
      const data = await Category.findByPk(id);

      return res.status(200).send(data);
    } else {
      return res.status(401).send({ message: 'Acesso negado' });
    }
  }

  async updateOneCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    await Category.update({ name }, { where: { id } });

    return res.status(204).send();
  }
}

module.exports = new CategoryController();
