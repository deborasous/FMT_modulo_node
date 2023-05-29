//BUSCAR CAMINHOS RAIZ, LOCAL DOS ARQUIVOS
const path = require("path")

//principais funções do metodo PATH
//JOIN - concatena tudo e retorna os caminhos fornecidos
const url = path.join("/dados", "usuario.json")
// RESOLVE - retorna o caminho absoluto correspondente ao caminho passado como argumento
const urlendereco = path.resolve('dados', "usuario.json")
// DIRNAME - Retorna o diretório pai do caminho fornecido.
const urlAmplo = path.dirname('dados', "usuario.json")

