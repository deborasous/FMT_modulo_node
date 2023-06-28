const express = require('express');
const cors = require('cors');
const { connection } = require('./src/database/connection');

const app = express();
const port = 3003;

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    this.inicializeServer(server);
  }

  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log('Conexão autenticada com sucesso.');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async inicializeServer(app) {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  }
}

module.exports = Server;
