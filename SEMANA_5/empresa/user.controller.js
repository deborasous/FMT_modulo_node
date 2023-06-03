const { v4: uuidv4 } = require('uuid');
const { criarOuAtualizar, pegarDados } = require('./utils');

module.exports = {
  async createUser(req, res) {
    console.log(req.body, 'sss');
    const { nome, idade, email } = req.body;

    if (!nome || !idade || !email) {
      return res
        .status(400)
        .send({ mensagem: 'Campos nome, idade, email são obrigatórios.' });
    }

    if (
      typeof nome !== 'string' ||
      typeof idade !== 'number' ||
      typeof email !== 'string'
    ) {
      return res
        .status(400)
        .send({ mensagem: 'Os campos devem ser do tipo string.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      return res.status(400).send({ mensagem: 'Formato de email inválido.' });
    }

    const users = pegarDados('users.json');
    if (!users) {
      const id = uuidv4();
      criarOuAtualizar('users.json', [{ id, nome, idade, email }]);

      return res.status(200).send({
        mensagem: 'Usuário criado com sucesso!',
        dados: pegarDados('users.json'),
      });
    }

    const id = uuidv4();
    const totalusers = [
      ...users,
      {
        id,
        nome,
        idade,
        email,
      },
    ];

    criarOuAtualizar('users.json', totalusers);

    return res.status(200).send({
      menssagem: 'Usuário criado com sucesso!',
      dados: pegarDados('users.json'),
    });
  },

  async getUsers(req, res) {
    const users = pegarDados('users.json');
    console.log(users);

    if (!users) {
      return res.status(204).send();
    }

    return res.status(200).send(users);
  },
};
