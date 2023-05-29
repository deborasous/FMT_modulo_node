function velocidade(velocPermitida, velocimentro) {
  const porcent = (velocimentro - velocPermitida) / velocPermitida;

  if (velocimentro <= velocPermitida) {
    console.log("Sem multa");
  } else if (porcent <= 0.2) {
    console.log("Multa leve");
  } else {
    console.log("Multa grave");
  }
}

module.exports = velocidade;
