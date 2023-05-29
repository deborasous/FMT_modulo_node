const gerarSenha = require("./modules/senhaAleatoria");

//indica o tamanho da senha desejada, é enviada como parametro para gerarSenha
const tamanho = 12;

const senha = gerarSenha(tamanho);
console.log(senha);
