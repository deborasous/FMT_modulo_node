const express = require('express')
const userRoutesV1 = express.Router()
const {listaDeUsuarios, criarBaseDeDado} = require('../../controller')



userRoutesV1.get('/users/listaDeUsuarios', listaDeUsuarios)
userRoutesV1.get('/users/criarBaseDeDado', criarBaseDeDado)