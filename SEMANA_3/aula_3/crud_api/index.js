const http = require('http')
const fs = require('fs')
const querystring= require('querystring')
const { Church } = require('lucide-react')

function ListarProduto() {
  try {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))
    return JSON.stringify(dados.produtos)
  } catch (error) {
    return "Erro ao executar"
  }
}

function CriarProduto(novoProduto) {
  try {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))
    dados.produtos.push(JSON.parse(novoProduto))
    fs.writeFileSync("dados.json", JSON.stringify(dados))
    return 'Produto cadastrado com sucesso'
  } catch (error) {
    return "Erro ao executar"
  }
}

function EditarProduto(prod) {
  try {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))

    let produto = JSON.parse(prod)
    dados.produtos.map(x => {
      if (x.id == produto.id) {
        Object.assign(x, produto)
      }
    })

    fs.writeFileSync("dados.json", JSON.stringify(dados))
    return 'Produto atualizado com sucesso!'
  } catch (error) {
    return "Erro ao executar"
  }
}

function DeleteProduto(id){
  try {
    const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))

    let novoArray = dados.produtos.filter(item => item.id != id)    
      
     dados.produtos = novoArray

    fs.writeFileSync("dados.json", JSON.stringify(dados))
    return 'Produto removido com sucesso!'
  } catch (error) {
    return "Erro ao executar" + error.message
  }
}

const server= http.createServer((req, res)=>{
  if (req.url == '/produto') {
    switch (req.method) {
      case "GET":
        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
        res.end(ListarProduto())
        break;

        case "POST":
          let datas=''
          req.on("data", (data)=>{
            datas += data
          })
          req.on("end", ()=>{
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
            res.end(CriarProduto(datas))
          })
        break;

        case 'PUT':
          let produtoPut = ""
          req.on("data", (chunk)=>{
            produtoPut += chunk
          })
          req.on("end", ()=>{
            res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
            res.end(EditarProduto(produtoPut))
          })
        break;

        case 'DELETE':
          let dadoDelete = ""
          req.on("data", (chunk)=>{
            dadoDelete += chunk
          })
          req.on("end", ()=>{
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
            res.end(DeleteProduto(dadoDelete))
            })
        break;
    }
  }
})

const port = 3004
server.listen(port, console.log(`Servidor rodando na porta ${3004}`))