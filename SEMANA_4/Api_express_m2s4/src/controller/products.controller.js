const { readDatas, createFileOrUpdate } = require('../../utils');

module.exports = {
  async createProduct(req, res) {
    const newItem = req.body;
    console.log(req.body, 'ggg');

    let products = readDatas('products.json');

    if (!Array.isArray(products)) {
      products = [];
    }

    if (products.length === 0) {
      createFileOrUpdate('products.json', [newItem]);

      return res.status(200).send({
        mensagem: 'Criado com sucesso!',
        datas: readDatas('products.json'),
      });
    }
    console.log(products, 'ddd');

    const productExists = products.some((prod) => prod.item === newItem.item);
    if (productExists) {
      return res.status(409).send({
        mensagem: 'Produto já cadastrado.',
        datas: readDatas('products.json'),
      });
    }

    const updateDatas = [...products, newItem];

    createFileOrUpdate('products.json', updateDatas);
    return res.status(200).send({
      mensagem: 'Adicionado com sucesso!',
      datas: readDatas('products.json'),
    });
  },
};
