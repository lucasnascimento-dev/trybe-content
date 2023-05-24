const express = require("express");
const validateTeam = require("./middlewares/validateTeam");
const existingId = require("./middlewares/existingId");

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

const teams = [
  { id: 1, nome: "São Paulo Futebol Clube", sigla: "SPF" },
  
  { id: 2, nome: "Sociedade Esportiva Palmeiras", sigla: "PAL" },
];

app.use(express.json()); // Prepara nossa API para receber dados
app.use(apiCredentials);

// Listando times por meio do GET ---------------------------------------------------
app.get("/teams", (req, res) => res.status(200).json({ teams }));

app.get("/teams/:id", existingId, (req, res) => {
  const id = Number(req.params.id);

  const team = teams.find((t) => t.id === id);

  res.json(team);
});

app.post("/teams", validateTeam, (req, res) => {
  let nextId = teams.length + 1;
  const team = { id: nextId, ...req.body };

  teams.push(team);

  nextId += 1;

  res.status(201).json(team);
});

app.put("/teams/:id", validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);

  const team = teams.find((t) => t.id === id);

  if (team) {
    const index = teams.indexOf(team);

    const updated = { id, ...req.body };

    teams.splice(index, 1, updated);

    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

//  Deletando times por meio do método DELETE
app.delete("/teams/:id", existingId, (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
