const githubUser = require("./modules/apiGithub");

const user = "Bruno-Costa-fig";
githubUser(user).then((userData) => {
  console.log(
    `Nome: ${userData.nome}, Email: ${userData.email}, Foto: ${userData.foto}, Repositórios: ${userData.repositorio}`
  );
});
