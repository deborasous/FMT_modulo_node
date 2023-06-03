const { readDatas, createFile } = require('../../utils');
const { use } = require('../routes/users.routes');

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

  //
  async generateDate(req, res) {
    const { month } = req.params; //pega o mês digitado pelo usuário
    const year = new Date().getFullYear(); //pega ano atual
    console.log(month, year);

    //verifica se o mês é válido
    if (month < 1 || month > 12) {
      return res.status(400).json({ message: 'Mês informado não existe.' });
    }

    //obter o numero de dias do mes informado
    const numberDays = new Date(year, month, 0).getDate();

    //cria um array com todos as datas do mês e ano atual
    const datas = [];
    for (let day = 1; day <= numberDays; day++) {
      const data = `${day.toString().padStart(2, '0')}/${month
        .toString()
        .padStart(2, '0')}/${year}`;
      datas.push(data);
    }

    res.json(datas);
    console.log(datas);
  },

  async filterData(req, res) {
    const { name, ageMin, ageMax, state, job } = req.query;

    const users = readDatas('user.json');

    //filtrar
    const filteredData = users.filter((user) => {
      if (name && user.name.toLowerCase() !== name.toLowerCase()) {
        return false;
      }

      if (ageMin && user.age < Number(ageMin)) {
        return false;
      }

      if (ageMax && user.age > Number(ageMax)) {
        return false;
      }

      if (state && user.state.toLowerCase() !== state.toLowerCase()) {
        return false;
      }

      if (job && user.job.toLowerCase() !== job.toLowerCase()) {
        return false;
      }
      return true;
    });

    res.json(filteredData);
  },
};
