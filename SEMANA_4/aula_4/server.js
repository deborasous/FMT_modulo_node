const express = require('express')
const app = express()
const router = require('./src/routes/router')

app.use(express.json())
app.use('/empresa', router)

const port = 3333
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)})