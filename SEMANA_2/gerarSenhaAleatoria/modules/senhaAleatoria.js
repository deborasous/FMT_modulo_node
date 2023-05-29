function gerarSenha(tamanho) {
  //indica quais os tipos de caracteres devem ser válidos na senha
  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let resultSenha = "";

  for (let i = 0; i < tamanho; i++) {
    //Math.random() gera um número aleatório entre 0 e 1
    //a Math.floor(x * caracteres.length) retorna um número aleatório no intervalo de 0 a 61(levando em cinsideração o comprimento da variavel caracteres que tem o comprimento de 62 caracteres)
    //o número encontrado em Math.floor(x * caracteres.length) é usado para obter o índice dos caracteres da variável.
    const indice = Math.floor(Math.random() * caracteres.length);
    resultSenha += caracteres[indice];
  }

  return resultSenha;
}

module.exports = gerarSenha;
