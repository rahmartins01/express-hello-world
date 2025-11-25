const express = require("express");
const app = express();

app.use(express.json()); // Necessário para POST receber JSON

// 1. GET /meunome
app.get("/meunome", (req, res) => {
  res.send("Meu nome é Rayssa++");
});

// 2. GET /tico
app.get("/tico", (req, res) => {
  res.send("teco");
});

// 3. GET /pokemons
app.get("/pokemons", (req, res) => {
  const pokemons = [
    "Pikachu",
    "Caterpie",
    "Pidgeotto",
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Krabby",
    "Muk",
    "Tauros",
    "Lapras",
  ];
  res.json(pokemons);
});

// 4. POST /series
app.post("/series", (req, res) => {
  const series = ["Breaking Bad", "Dark", "Stranger Things"];
  res.json(series);
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 ");
});
