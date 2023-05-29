const sistemaDeArquivo = require('fs');


function validaEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return regex.test(email);
}


function criarAtualizar(nomeDoArquivo, dados){
  try {
    sistemaDeArquivo.writeFileSync('src/database/'+ nomeDoArquivo, 
    JSON.stringify(dados));
    
  } catch (error) {
    throw error
  }
}

function pegarDados(nomeDoArquivo){
  try {
    const resultadoDaBusca= JSON.parse(sistemaDeArquivo.readFileSync('src/dataBase/' + nomeDoArquivo, 'utf8'))
  
    return resultadoDaBusca
  } catch (error) {
    throw error
  }
}
module.exports = {
  validaEmail,
  criarAtualizar,
  pegarDados
}
