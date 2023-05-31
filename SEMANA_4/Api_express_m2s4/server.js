const express = require('express')
const rotasDaEmpresa = require('./src/routes/routes')
const app = express()
const port = 3000

app.use(express.json())

app.use("/", rotasDaEmpresa)

// rotas aqui
app.listen(port, ()=> {console.log(`Servidor rodando na porta ${port}`)})