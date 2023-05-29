const velocidade = require("./modules/verificarVelocidade");

const velocPermitida = 50;
const velocimentro = 60;

const result = velocidade(velocPermitida, velocimentro);

console.log(result);
