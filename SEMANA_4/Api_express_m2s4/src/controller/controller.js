const { readDatas, createFile } = require('../../utils');

module.exports = {
  async updatData(req, res) {
    //salva os names do arquivo json na lista names
    let names = [];
    const guestNames = readDatas('user.json');
    names = guestNames.map((item) => item.name);
    console.log(names, 'lista');

    //Para as regras 1 e 2, alterar o valor de indexToBeExchanged
    const indexToBeExchanged = 3;
    const nameForExchange = 'Carla';

    //regra 3: VERIFIAR SE O NOME ESTÁ NA LISTA
    if (!names.includes(nameForExchange)) {
      return res.status(404).json({
        message: `O convidado ${nameForExchange}, não pertence a lista.`,
      });
    }

    //ALTERAR POSIÇÕES
    if (indexToBeExchanged >= 0 && indexToBeExchanged < names.length) {
      const temp = names[0]; //armazenar o valor do indice 0 (Pedro) temporariamente
      names[0] = names[indexToBeExchanged]; //substitui o valor de indice 0 pelo valor de indexToBeExchanged
      names[indexToBeExchanged] = temp; //substitui o valor de indexToBeExchanged pelo valor salvo em temp
      console.log(names, 'novalista');
      return res.json({
        message: `Posição dos convidados foram trocados com sucesso`,
        names,
      });
    }

    return res.status(400).json({ message: `Indice de troca inválido` });
  },

  async listNames(req, res) {
    console.log(req.body, 'fff');
    const guestNames = readDatas('user.json');
    console.log(guestNames);
  },
};
