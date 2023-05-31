const express = require('express')
const app = express()
const rotasDaEmpresa = require('./empresa.router')

app.use(express.json())
app.use(rotasDaEmpresa)


app.listen(3331, () => 
  console.log("Servidor rodando na porta 3333, http://localhost:3331")
) 