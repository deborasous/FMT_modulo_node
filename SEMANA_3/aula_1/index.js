const fs = require("fs");

//TODOS OS ..SYNC NÃO RECEBEM CALLBACK COMO PARAMETRO

//fs.writeFile - grava o conteúdo escrito no arquivo arquivo.txt. Ele apaga tudo o que estiver escrito no arquivo e substitui pelo conteúdo novo.
//fs.writeFile -  recebe como parametro: o nome do arquivo onde será reescrito o novo conteúdo, o novo conteudo e um função de callbak que retornára um erro caso a o conteúdo não possa ser gravado no arquivo, se correr tudo certo, retorna uma mensagem de sucesso.

// no callback pode ser passardo o erro e os dados, caso haja
//conteudo, (err, data) =>
//é do tipo não bloqueante, pois ele não espera a execução ser concluida para continuar rodando o restante do código. Dessa forma o console..og('depois') será executado antes do fs.writeFile

const conteudo = "Este é o conteúdo que será gravado no arquivo.";

fs.writeFile("arquivo.txt", conteudo, (err) => {
  if (err) throw err;
  console.log("Arquivo gravado com sucesso! writeFile");
});

console.log("depois");

/*
-- fs.writeFileSync - é um método bloqueante, ou seja, o restante do código só será executado depois que o metodo for concluído.

-- fs.writeFileSync - não tem callback para prevenir o erro. Por tanto, deve usar o try/catch para fazer esse tratamento.

*/
const novoConteudo = "Novo conteúdo em método async";

try {
  fs.writeFileSync("arquivo.txt", novoConteudo);
  console.log("Arquivo gravado com sucesso! writeFileSync");
} catch (error) {
  console.log(error);
}

/*
-- fs.readFile(arquivo.txt, "utf8", (erro, dados)=>{})
utf8 é opcional mais indispensável para ler textos com caracteres especiais
*/
const newConteudo = "Novo conteúdo em método async";

fs.readFile("arquivo.txt", "utf-8", (erro, dados) => {
  if (erro) throw erro;
  console.log(dados);
});

/**
 * O readFileSync serve para ler o conteúdo de um arquivo
 *
 * # PARAMETRO:
 * 1º - arquivo/caminho do arquivo a ser lido
 * 2º - encoding - utf-8
 * 
 *
 * Precisamos receber o resultado em uma variável
 */
try {
  const dados = fs.readFileSync("arquivo.txt", "utf-8");
  console.log(dados);
} catch (erro) {
  console.log(erro);
}

/**
 * O mkdir serve para criar um diretório/pasta
 *
 * # PARAMETRO:
 * 1º - é ocaminho a ser usado
 * 2º - função callback
 *
 * Precisamos receber o resultado em uma variável
 */

// fs.mkdir("exemplo", (erro) => {
//   if (erro) throw erro
//   console.log("Pasta criada com sucesso!")
// })

/**
 * O appendFile serve para escrever conteúdos dentro do arquivo. Diferente do writeFile, este não exclui o conteúdo que já estiver no arquivo, somente adiciona
 * 
 * # PARAMETRO:
 * 1º - arquivo a ser usado
 * 2º - conteúdo a ser adicionado
 * 3º - encoding utf8 - opcional
 * 4º - função callback

 */

const conteud = "Conteúdo do appendFile";

fs.appendFile("arquivo.txt", conteud, "utf-8", (erro) => {
  if (erro) throw erro;
  console.log("Pasta criada com sucesso!, appendFile");
});
