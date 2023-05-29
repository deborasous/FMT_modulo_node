const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

let formHtml = "";

try {
  formHtml = fs.readFileSync("index.html", "utf-8");
} catch (error) {
  console.log(error);
}

function saveDatas(datas) {
  return querystring.parse(datas).name;
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Este é a HOME</h1>");
      res.write(`<h1>${req.url}</h1>`);
      res.end();
      break;
    case "/user":
      switch (req.method) {
        case "GET":
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.write(formHtml);
          res.end();
          break;

        case "POST":
          let datas = "";

          req.on("data", (data) => {
            datas += data;
          });

          req.on("end", () => {
            console.log("Dados enviado com sucesso!");
            const name = saveDatas(datas);
            const htmlRes = `
            <p>Sejá bem vindo(a) ${name}</p>
            <button onclick="window.location.href = '/user'">Voltar</button>`;

            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write(htmlRes);
            res.end();
          });
          break;
      }
      break;
  }
});

const port = 3003;
server.listen(port, console.log(`Servidor Rodando na porta ${port}`));
