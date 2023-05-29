const axios = require("axios");

const buscarEndereco = async (cep) => {
  try {
    //o axios faz uma requisição http para o viacep e retorna os dados do endereco
    //async/await é usado sempre que fizer uma requisição para uma API externa, dessa forma o js continua executando o código sem esperar a resposta
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (res.data.erro) {
      return { error: "CEP inválido" };
    }

    const endereco = {
      logradouro: res.data.logradouro,
      bairro: res.data.bairro,
      cidade: res.data.localidade,
      estado: res.data.uf,
    };

    return endereco;
  } catch (error) {
    return { error: "Erro ao buscar CEP" };
  }
};

module.exports = buscarEndereco;
