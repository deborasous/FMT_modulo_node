const express = require('express');
const app = express();
const rotas = require('./src/routes');
const port = 3333;

app.use(express.json());

// Rotas
app.use(rotas);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
