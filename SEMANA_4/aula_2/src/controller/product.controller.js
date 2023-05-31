const { criarAtualizar, pegarDados } = require('../../utils');

module.exports = {
  async listaDeProdutos(req, res) {
    try {
      const usuarioDaBase = pegarDados('product.data.json');
      return res.status(200).send({ usuario: usuarioDaBase });
    } catch (error) {
      return res.status(400).send({
        mensagem: 'Não foi enviado o nome do arquivo',
        Causa: error.message,
      });
    }
  },

  async criarBaseDeDado(req, res) {
    try {
      /**
       * deve passar para a função criarAtualizar() o nome do arquivo a ser criado ou atualizado e os dados. De forma estática: passa como argumento assim,  
      //   'user.json', {
      //   id: 1,
      //   name: 'Debora',
      //   email: "debora@gmail.com",
      //   senha: 'dshg253',}

    ou passa de forma dinâmica no corpo da requisição dentro do thander dessa forma: 
    {
    "nomeDoArquivo": "user.json",
    "dados":[
        {
          "id": 1,
          "name": "Debora",
          "email": "debora@gmail.com",
          "senha": "dshg253"
        }
      ]
    }
       */
      const { nomeDoArquivo, dados } = req.body;
      criarAtualizar(nomeDoArquivo, dados);
      return res.status(201).send({ message: 'Criação de arquivo concluída' });
    } catch (error) {
      return res
        .status(400)
        .send({ message: 'Falha ao criar o arquivo', causa: error.message });
    }
  },
};
