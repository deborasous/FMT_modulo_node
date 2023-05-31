const fs = require('fs')
const path = require("path")

function readDatas() {
  try {
    const filePath = path.join(__dirname, 'src', 'database', 'user.json')
    const data = fs.readFileSync(filePath, 'utf-8')
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (error) {
    return "Erro ao executar"
  }
}

module.exports = {
  readDatas
}