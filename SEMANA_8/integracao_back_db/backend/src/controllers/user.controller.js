const { User } = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

  async Login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      if (email === user.email && password === user.password) {
        const token = jwt.sign({ user, logged: true }, process.env.JWT_SECRET);

        return res.json({ token });
      }

      //credenciais invalidas
      return res.status(401).json({ message: 'Credênciais inválidas' });
    } catch (error) {
      return res
        .status(500)
        .send({ message: 'Falha no login', cause: error.message });
    }
  }
}

module.exports = new UserController();
