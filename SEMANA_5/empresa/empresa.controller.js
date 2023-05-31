const { criarOuAtualizar, pegarDados } = require('./utils');

module.exports = {
  async verificarEmpresa(req, res, proximo) {
    console.log(req.body.cnpj);
    if (!req.body.cnpj) {
      return res.status(400).send({ erro: 'A empresa não é verídica!' });
    }
    console.log('Essa empresa é véridica!');
    proximo();
  },

  async criarEmpresa(req, res) {
    console.log(req.body);
    const { cnpj, fantasyName, createDate } = req.body;

    if (!cnpj || !fantasyName || !createDate) {
      return res
        .status(400)
        .send({ message: 'Campos obrigatórios não foram fornecidos.' });
    }

    if (
      typeof cnpj !== 'string' ||
      typeof fantasyName !== 'string' ||
      typeof createDate !== 'string'
    ) {
      return res.status(400).send({
        message: 'Todos os campos devem está na tipagem correta',
      });
    }
    const empresas = pegarDados('data.json');

    if (!empresas) {
      criarOuAtualizar('data.json', [{ cnpj, fantasyName, createDate }]);

      return res.status(200).send({
        mensagem: 'Criou uma empresa!',
        dados: pegarDados('data.json'),
      });
    }

    const totalEmpresas = [
      ...empresas,
      {
        cnpj,
        fantasyName,
        createDate,
      },
    ];

    criarOuAtualizar('data.json', totalEmpresas);
    console.log(totalEmpresas);

    return res.status(200).send({ mensagem: 'Criou uma empresa!' });
  },

  async listarEmpresas(req, res) {
    const empresas = pegarDados('data.json');

    if (!empresas) {
      const existDatasValidos = Object.keys(empresas[0]).some((propiedade) => {
        return (
          propiedade === 'cnpj' ||
          propiedade === 'fantasyName' ||
          propiedade === 'createDate'
        );
      });
      if (!existDatasValidos) {
        return res.status(204).send();
      }
      return res.status(204).send();
    }
    return res.status(200).send({ mensagem: 'Tem Empresas', dados: empresas });
  },

  async atualizarEmpresa(req, res) {
    const { cnpj } = req.params;
    const { fantasyName, createDate } = req.body;

    try {
      const empresas = pegarDados('data.json');

      //se a função pegarDados retornar null, retorna o erro 500
      if (!empresas) {
        return res
          .status(500)
          .json({ message: 'Erro ao obter os dados das empresas' });
      }

      //find busca a empresa no array 'empresas' com o CNPJ correspondente ao valor do cnpj do params. Caso não hava uma empresa com o cnpj indicado, retorna um erro 404
      const empresa = empresas.find((emp) => emp.cnpj === cnpj);

      if (!empresa) {
        return res.status(404).json({ message: 'Empresa não encontrada' });
      }

      //as propriedades fantasyName e createDate serão atualizadas se os valores fornecidos na requisição. Se o fantasyName for fornecido, o fantasyName da empresa é atualizada com o novo valor, o mesmo para o createDate
      if (fantasyName) {
        empresa.fantasyName = fantasyName;
      }

      if (createDate) {
        empresa.createDate = createDate;
      }

      //depois é chamada a função criarOuAtualizar, que recebe o nome do arquivo e os dados atualizados das empresas e salva os dados no JSON substituindo o conteudo anterior
      criarOuAtualizar('data.json', empresas);

      //por fim, é retornado um objeto json atraves do objeeto res com a mensagem e o status de sucesso
      return res.status(200).json({ message: 'Empresa alterada com sucesso' });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'Erro ao realizar a alteração', error });
    }
  },
};
