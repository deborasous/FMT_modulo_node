const { User } = require('../models/users');
const bcrypt = require('bcrypt');

class UserController {
  async createOneUser(req, res) {
    try {
      const { traineeId, name, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const dataUser = await User.create({
        traineeId,
        name,
        email,
        password: hashedPassword, // Salva a senha criptografada no banco de dados
      });

      return res.status(201).send(dataUser);
    } catch (error) {
      return res.status(400).send({
        message: 'Não foi possível criar um registro de Usuário',
        cause: error.message,
      });
    }
  }

  async userLogin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      if (user.password === password) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
        return res.status(200).send({ user, message: 'Login bem-sucedido' });
      } else {
        return res.status(400).send({ message: 'Senha inválida' });
      }
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Falha no login', cause: error.message });
    }
  }
}

module.exports = new UserController();
