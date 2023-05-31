const fs = require('fs');

//recebe o nome de um arquivo e os dados que devem ser gravados nele. Ela converte os dados em formato JSON e os escreve no arquivo especifico usando modulo "fs"
function criarOuAtualizar(nomeDoArquivo, dados) {
  try {
    fs.writeFileSync('' + nomeDoArquivo, JSON.stringify(dados));
  } catch (error) {
    throw error;
  }
}

// recebe o nome de um arquivo e tenta ler seu conteudo usando o modulo "fs". Se a leitura for bem sucedida, o conteúdo é interpretado como JSON e retorna um objeto JS, se ouver erro, retorna null
function pegarDados(nomeDoArquivo) {
  try {
    const resultadoDaBusca = JSON.parse(
      fs.readFileSync('' + nomeDoArquivo, 'utf8')
    );
    return resultadoDaBusca;
  } catch (error) {
    return null;
  }
}


module.exports = {
  criarOuAtualizar,
  pegarDados
};
