const express = require('express');
const usersRoutes = require('./src/routes/users.routes');
const productRoutes = require('./src/routes/products.routes');
const app = express();
const port = 3003;

app.use(express.json());

app.use(usersRoutes);
app.use(productRoutes);

// rotas aqui
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
