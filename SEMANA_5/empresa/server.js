const express = require('express');
const app = express();
const rotasDaEmpresa = require('./empresa.router');
const rotasUsers = require('./user.router');

app.use(express.json());
app.use(rotasDaEmpresa);
app.use(rotasUsers);

const port = 3331;
app.listen(port, () =>
  console.log(`Servidor rodando na porta ${port}, http://localhost:3331`)
);
