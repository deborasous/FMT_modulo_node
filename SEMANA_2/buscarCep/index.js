const buscarEndereco = require("./modules/buscarCep");

const cep = 88025035;

buscarEndereco(cep).then(console.log);
