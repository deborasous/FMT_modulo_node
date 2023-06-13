const fs = require('fs');

function createFileOrUpdate(fileName, datas) {
  try {
    fs.writeFileSync('./src/database/' + fileName, JSON.stringify(datas));
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar ou atualizar o arquivo.');
  }
}

function readDatas(fileName) {
  try {
    const filePath = JSON.parse(
      fs.readFileSync('./src/database/' + fileName, 'utf-8')
    );
    return filePath;
  } catch (error) {
    return 'Erro ao executar';
  }
}

module.exports = {
  createFileOrUpdate,
  readDatas,
};
