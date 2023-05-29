const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

// Rotas
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, ()=> {console.log(`Servidor rodando na porta ${port}`)})