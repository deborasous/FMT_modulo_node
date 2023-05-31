const express = require('express');
const productRoutesV1 = express.Router();
const { listaDeProdutos, criarBaseDeDado } = require('../../controller/product.controller');

productRoutesV1.get('/product/listadeprodutos', listaDeProdutos);
productRoutesV1.post('/product/criararquivo', criarBaseDeDado);

module.exports = productRoutesV1;
