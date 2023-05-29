const fs = require("fs");
const {v4: uuidv4} = require("uuid")

//carregar os usuarios do arquivo json
function loadUsers(){
  // const usersJson = "data/users.json";
  try {//ler e converte o arquivo json para um objeto
    const usersJson = fs.readFileSync("data/users.json",  'utf8')
    const jsonData = JSON.parse(usersJson)

    return jsonData.users || []
  } catch (error) {
    console.error("Erro ao carregar o usuário:", error)
    return []
  }
}

//Salvar usuário no arquivo json
function saveUsers(users){
  try {
    const data ={users: users}
    const convertObjectToJson = JSON.stringify(data)
    fs.writeFileSync("data/users.json", convertObjectToJson, 'utf8')
  } catch (error) {
    console.error("Erro ao salvar usuários:", error);
  }
}

function registerUser(newUser) {
  if (!newUser.nome || !newUser.email || !newUser.senha) {
    return "Error: todos os campos são obrigatórios"
  }

  const usersJson = loadUsers()

  //verificar se o email já está sendo usado
  const userAlreadyExists = usersJson.some(user => user.email === newUser.email)
  if (userAlreadyExists) {
    return "Erro: E-mail já está sendo utilizado."
  }
  
  const userId = uuidv4()
  
  const user = {id: userId, ...newUser}
  usersJson.push(user)
  //cria um novo objeto no array
 
  
  //Adicionar o novo usuário a lista e salva
  saveUsers(usersJson)
  
  return "Usuário cadastrado com sucesso."
}

function login(email, senha) {
  const usersJson = loadUsers()
  console.log(usersJson, 'login')

  //verificar se existe algum usuário com email fornecido
  const user = usersJson.find(u => u.email === email)
  if (!user) {
    return "Error: Usuário não cadastrado."
  }
  console.log(user, 'login')

  //verificar se a senha está correta
  if (user.senha !== senha) {
    return "Erro: Senha incorreta. Verifique a senha e tente novamente"
  }

  return `Bem vindo(a) ${user.nome}, seu login foi realizadocom sucesso`
}

function deleteUser(email, senha) {
  const usersJson = loadUsers()

  //verificar se existe algum usuário com o email fornecido
  userIndex = usersJson.findIndex(user => user.email === email)
  if (userIndex === -1) {
    return "Erro: Usuário não encontrado."
  }

  //verificar se a senha do email indicado está correta
  if (usersJson[userIndex].senha !== senha) {
    return "Erro: Senha incorreta."
  }

  //remover o usuário da lista
  usersJson.splice(userIndex, 1)
  saveUsers(usersJson)

  return "Usuário excluído"
}

function updateUser(email, novoNome, novaSenha){
  if (!email || !novoNome || !novaSenha) {
    return "Error: todos os campos são obrigatórios"
  }
  
  const usersJson = loadUsers()

  const userIndex = usersJson.findIndex((user)=> user.email === email)
  if (userIndex === -1) {
    return "Usuário não encontrado."
  }

  //evitar que fique retornando um loop da mesma alteração
  if (usersJson[userIndex].nome === novoNome && usersJson[userIndex].senha === novaSenha) {
    return null
  }

  usersJson[userIndex].nome = novoNome;
  usersJson[userIndex].senha = novaSenha;

  saveUsers(usersJson)

  return "Usuário atualizado com sucesso"
}

module.exports = { loadUsers,  registerUser, login, deleteUser, updateUser };
