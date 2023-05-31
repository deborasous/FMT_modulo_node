const express =require("express")
const router = express.Router()
const {readDatas} =require('../../utils');
const { restart } = require("nodemon");

router.get('/', (req, res) => {
  const jsonData = readDatas();
  const namesList = jsonData.map(item => item.name);
  res.json(namesList);
});

router.patch('/', (req, res)=>{
  const jsonData = readDatas();
  const namesList = jsonData.map(item => item.name);

  if (!req.body || !req.body.strings || !Array.isArray(req.body.strings)) {
    return res.status(400).json({error: "A lista de strings é obrigatória e deve ser um array"})
  }

  const strings = req.body.strings

  // Regra 1: Trocar a posição do índice 0 por qualquer outro item da lista
  const index0 = strings[0]
  const randomIndex = Math.floor(Math.random() * (strings.length - 1)) + 1
  strings[0] = strings[randomIndex]
  strings[randomIndex]= index0

  // Regra 2: Colocar 'Danilo' no topo da lista, trocando de lugar com 'Pedro'
  const daniloIndex = strings.indexOf("Danilo")
  const pedroIndex = strings.indexOf("Pedro")
  if (daniloIndex !== -1 && pedroIndex !== -1) {
    strings[daniloIndex]="Pedro"
    strings[pedroIndex]="Danilo"
  }

  // Regra 3: Verifica se todos os nomes existem na lista
  const nameNotFound= strings.filter(name=>!namesList.includes(name))
  if (nameNotFound.length > 0) {
    return res.status(400).json({error: `Os seguintes convidados não pertencem a esta lista: ${namesNotFound.join(", ")}`})
  }

  return res.json({ response: strings})
})
 
module.exports = router

