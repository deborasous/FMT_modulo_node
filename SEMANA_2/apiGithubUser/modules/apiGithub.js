const githubUser = async (user) => {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);

    if (!res.ok) {
      throw new Error("Erro na obtenção de usuário");
    }

    //pegar as informações do usuario
    const data = await res.json();
    console.log;
    const { name, email, avatar_url, public_repos } = data;

    //se correr tudo bem ao pegar as informações da api, retorna um objeto com as informações
    return {
      nome: name,
      email: email,
      foto: avatar_url,
      repositorio: public_repos,
    };
  } catch (error) {
    console.log("Erro:", error);
    return null;
  }
};

module.exports = githubUser;
