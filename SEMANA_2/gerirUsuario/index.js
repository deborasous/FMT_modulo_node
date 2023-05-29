const { loadUsers, registerUser, login, deleteUser, updateUser } = require("./modules/User");

//CADATRAR USUÁRIO
const newUser = {
  nome: "",
  email: "",
  senha: "",
};

const registerNewUser = registerUser(newUser);
console.log(registerNewUser, 'register')

//LISTAR OS USUARIOS CADASTRADO
const users = loadUsers();
users.forEach((user) => {
  console.log(user, 'lista')
  
});


//FAZER LOGIN
// const email = "eve@gmail.com";
// const senha = "asfsdf55";

// const newLoginUser = login(email, senha);
// console.log(newLoginUser, 'logado')


//EXLUIR USUÁRIO - ok
// const email = "lunatica@gmail.com";
// const senha = "sadas5d4";

// const deletedUser = deleteUser( email, senha);

// console.log(deletedUser, 'del')


//ALTERAR DADOS DE USUÁRIO
const email = "carla@gmail.com";
const novoNome= "Carla Maria";
const novaSenha = "ffff45f";

const updatedUser = updateUser(email, novoNome, novaSenha)

console.log(updatedUser, 'Alterado')