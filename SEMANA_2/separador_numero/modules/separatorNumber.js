function separadorNumero(arrayNumeros, opcao) {
  if (opcao === 1) {
    return arrayNumeros.filter((numero) => numero % 2 !== 0);
  } else if (opcao === 2) {
    return arrayNumeros.filter((numero) => numero % 2 === 0);
  } else if (opcao === 3) {
    const numerosImpares = arrayNumeros.filter((numero) => numero % 2 !== 0);
    const numerosPares = arrayNumeros.filter((numero) => numero % 2 === 0);
    return { impares: numerosImpares, pares: numerosPares };
  } else {
    throw new Error("opção Inválida. A opção deve ser um número de 1 a 3.");
  }
}

module.exports = separadorNumero;
