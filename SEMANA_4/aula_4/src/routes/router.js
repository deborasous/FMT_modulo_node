const express = require('express')
const router = express.Router()

router.get('/empresa', (req, res)=>{
  res.send("Está é a lista de usuários")
})

router.post('/empresa', (req, res)=>{
  res.send("Está rota é para cadastro.")
})

router.patch('/empresa', (req, res)=>{
  res.send("Está rota para alterado.")
})

router.delete('/empresa', (req, res)=>{
  res.send("Está rota para exluir.")
})

module.exports= router