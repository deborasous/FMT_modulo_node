const express = require('express');
const rotas = express.Router();
const productRoutesV1 = require('./v1/product.routes');

rotas.use([productRoutesV1]);

module.exports = rotas;

// rotas.get('/user', (req, res) => {
//   /* ##### BODY #####*/
//   const { email } = req.body; //* REQUISIÇÃO BODY - ENVIA OS DADOS NO CORPO DA REQUISIÇÃO, COMO SE FOSSE UM JSON

//   // cria uma lista de propriedades obrigatórias
//   const propriedades = ['email'];

//   // tranforma em um array de strings
//   const dadosDaRequisicao = Object.keys(req.body); // é o mesmo que [email, test, qualquerOutra]
//   //every - verifica se todas as propriedades de dentro de dadosDaRequisicao estão dentro da variável propriedades, se alguma não estiver contida, será false e retorna o erro da {existeProdValida}, se todas existe, retorna true e a mensagem de sucesso.
//   const prodSaoValidas = dadosDaRequisicao.every((propriedade) =>
//     propriedades.includes(propriedade)
//   );

//   if (!prodSaoValidas) {
//     return res.status(400).send({
//       message: 'Chave não existe',
//       causa: 'Dado inválido enviado na requisição',
//     });
//   }

//   /* ##########*/

//   if (!email || !validaEmail(email)) {
//     return res.status(400).send({
//       message: 'Não foi possível criar um usuário.',
//       causa: 'Não enviou o email',
//     });
//   }

//   return res.status(201).send({
//     message: 'Criou um usuário.',
//   });
// });

//==* QUERY *==//
// rotas.get('/produtos', (req, res) => {
//   // Acessando os parâmetros de consulta usando req.query
//   const cor = req.query.cor;
//   const precoMin = req.query.precoMin;
//   const precoMax = req.query.precoMax;

//   // Utilize os parâmetros para filtrar os produtos no banco de dados, por exemplo

//   // Retorne os produtos filtrados
//   res.json({ cor, precoMin, precoMax });

//   console.log(cor, precoMin, precoMax);
//   //testar: http://localhost:3333/produtos?cor=vermelho&precoMin=10&precoMax=50
// });

//==*PARAMS *==//
// rotas.get('/produtos/:id', (req, res) => {
//   //PARAMS CRIAR ROTAS DINAMICAS - nesse caso é obrigatório e o envio é feito na URL ...'/user/:idade'..., assim a URL passa a ser http://localhost:3333/user/nome e não mais http://localhost:3333/user
//   const IdProduct = req.params.id;

//   res.json({ id: IdProduct, nome: 'Produto x', preço: 10.99 });
//   //nesse caso, retorna os dados do produto e o id que foi digitado na URL

//   return res.status(201).send({
//     message: 'Criou um produto.',
//   });
// });
