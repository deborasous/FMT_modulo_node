const express = require('express')
const rotas = express.Router()
const userRoutesV1 = require('./v1/user')


rotas.use([userRoutesV1])

module.exports = rotas