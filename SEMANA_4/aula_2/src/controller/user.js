const { criarAtualizar, pegarDados } = require("../../utils")

module.exports={
  async listaDeUsuarios(req, res){
    try {
      const usuarioDaBase = pegarDados('user.json')
      return res.status(200).send({usuario: usuarioDaBase})
      
    } catch (error) {
      return res.status(400).send({
        mensagem: "Não foi enviado o nome do arquivo",
        Causa: error.message
      })
    }
    
  },

  async criarBaseDeDado(req, res){
    try {
      criarAtualizar()
      return res.status(201).send({message: "Criação de arquivo"})
    } catch (error) {
      return res.status(400).send({message: "Falha ao criar o arquivo", causa: error.message})
    }
  }
}
