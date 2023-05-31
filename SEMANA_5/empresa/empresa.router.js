const { Router } = require("express");
const rotasDaEmpresa = Router();
const { criarEmpresa, listarEmpresas, atualizarEmpresa } = require("./empresa.controller");
/*
 O Router serve para disponibilizar rotas 
 pelo servidor para serem acessíveis por 
 outras APIs/Frontend
*/

rotasDaEmpresa.post("/criarEmpresa", criarEmpresa);
rotasDaEmpresa.get("/empresa", listarEmpresas);
rotasDaEmpresa.patch("/atualizarempresa/:cnpj", atualizarEmpresa);


module.exports = rotasDaEmpresa;
