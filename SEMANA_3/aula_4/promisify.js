const fs = require("fs")
const util = require("util")

const readFileAsync = util.promisify(fs.writeFile)


readFileAsync("exemplo.txt", "Conteúdo do arquivo")
  .then(() => console.log("Arquivo criado com sucesso!"))
  .catch(erro => console.log(erro))