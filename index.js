const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.send("<h1>Página Inicial da aplicação</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Sobre Nós e sobre a aplicação</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contato sobre nós</h1>");
});

app.listen(port, () => {
  console.log("Rondando na Porta 3000");
});
