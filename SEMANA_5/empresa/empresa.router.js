const { Router } = require('express');
const rotasDaEmpresa = Router();
const {
  criarEmpresa,
  listarEmpresas,
  atualizarEmpresa,
  excluirEmpresa,
} = require('./empresa.controller');
/*
 O Router serve para disponibilizar rotas 
 pelo servidor para serem acessíveis por 
 outras APIs/Frontend
*/

rotasDaEmpresa.post('/empresa', criarEmpresa);
rotasDaEmpresa.get('/empresa', listarEmpresas);
rotasDaEmpresa.patch('/empresa/:cnpj', atualizarEmpresa);
rotasDaEmpresa.delete('/empresa/:cnpj', excluirEmpresa);

module.exports = rotasDaEmpresa;
