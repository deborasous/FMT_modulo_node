const { readDatas, createFileOrUpdate } = require('../../utils');

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

  async changeSingleData(req, res) {
    const id = parseInt(req.params.id);
    const { id: bodyId, name, age, job, state } = req.body;

    const users = readDatas('user.json');

    const existingUser = users.find((user) => user.id === id);

    if (!existingUser) {
      return res.status(404).send('Usuário não encontrado');
    }

    if (bodyId !== undefined && id !== bodyId) {
      return res.status(400).send('ID do params diverge do ID do body.');
    }

    console.log(users, 'ee');

    if (
      existingUser.name === name &&
      existingUser.age === age &&
      existingUser.job === job &&
      existingUser.state === state
    ) {
      return res.send('Não há alterações para serem feitas.');
    }

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: name || user.name,
          age: age || user.age,
          job: job || user.job,
          state: state || user.state,
        };
      }
      return user;
    });

    createFileOrUpdate('user.json', updatedUsers);

    return res.status(200).send({
      mensagem: 'Usuário Atualizado com sucesso!',
      dados: readDatas('user.json'),
    });
  },

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

  async deleteUser(req, res) {
    const id = parseInt(req.params.id);
    console.log(id, 'iddd');

    try {
      let users = await readDatas('user.json');

      const existUserIndex = users.findIndex((user) => user.id === id);

      if (existUserIndex === -1) {
        return res
          .status(404)
          .send({ error: 'Nenhum usuário encontrado com esse ID.' });
      }

      //remover item do id correspondente
      users.splice(existUserIndex, 1);

      createFileOrUpdate('user.json', users);

      return res.status(200).json({ mensagem: 'Item excluido com sucesso.' });
    } catch (error) {
      return res.status(500).json({
        erro: `Erro ao atualizar o arquivo produtos. ${console.log(error)}`,
      });
    }
  },

  async getUserName(req, res) {
    const id = parseInt(req.params.id);

    const users = readDatas('user.json');

    const existUser = users.find((user) => user.id === id);

    if (!existUser) {
      return res.status(404).json({ error: `Usuário não encontrado.` });
    }

    return res.json({ name: existUser.name });
  },
};
