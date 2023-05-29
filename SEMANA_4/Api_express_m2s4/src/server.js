const express = require('express')
const app = express()
const port = 3000

// rotas aqui
app.listen(port, ()=> {console.log(`Servidor rodando na porta ${port}`)})