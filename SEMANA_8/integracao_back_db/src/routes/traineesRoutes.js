const { Category } = require('../models/category');

class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;
    console.log(req);

    const categoryData = await Category.create({ name });

    return res.status(201).send(categoryData);
  }

  async getAllCategories(req, res) {
    const categoryData = await Category.findAll();

    return res.status(200).send(categoryData);
  }
}
