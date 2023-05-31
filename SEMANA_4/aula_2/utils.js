const fs = require('fs');

function validaEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
}

//a função criarBaseDeDado de dentro do controller, chama a criarAtualizar passando o nome do arquivo a ser criado e os dados que deseja que sejam salvaos dentro do novo arquivo.
function criarAtualizar(nomeDoArquivo, novoDado) {
  try {
    //** salvar novos dados ao arquivo criado **//
    let dadosExistentes = [];

    //verificar se o arquivo existe
    if (fs.existsSync('./src/dataBase/' + nomeDoArquivo)) {
      //ler o conteudo do arquivo existente
      const conteudoArquivo = fs.readFileSync(
        './src/dataBase/' + nomeDoArquivo,
        'utf-8'
      );
      dadosExistentes = JSON.parse(conteudoArquivo);
    }

    //combina dados existentes com novos dados
    const dadosCombinados = [...dadosExistentes, ...novoDado];

    //remover duplicados, caso haja
    const dadosSemDupli = Array.from(new Set(dadosCombinados));

    //está indicando o caminho onde o arquivo deve ser salvo e concatena com o nome do arquivo criado ou atualizado e os dados
    fs.writeFileSync(
      './src/dataBase/' + nomeDoArquivo,
      JSON.stringify(dadosSemDupli)
    );
  } catch (error) {
    throw error;
  }
}

function pegarDados(nomeDoArquivo) {
  try {
    const resultadoDaBusca = JSON.parse(
      fs.readFileSync('src/dataBase/' + nomeDoArquivo, 'utf8')
    );

    return resultadoDaBusca;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  validaEmail,
  criarAtualizar,
  pegarDados,
};
