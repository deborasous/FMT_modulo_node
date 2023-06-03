const express = require('express');
const productRoutes = express.Router();
const { createProduct } = require('../controller/products.controller');

productRoutes.post('/criarproduto', createProduct);

module.exports = productRoutes;
