const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const port = 3002;

app.use(express.json());

app.use(routes);

// rotas aqui
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
