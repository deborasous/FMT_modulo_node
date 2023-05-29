module.exports = {
  async verificarEmpresa(req, res, next){

    if (!req.headers.cnpj) {
      return res.status(400).send({
        erro: "A empresa não é veridica"
      })
    }
    console.log("A empresa não é veridica")
    next()
  },

  async criarEmpresa(){
    return res.status(200).send(
    {mensagem: "Criado com sucesso."}
    )
  }
}