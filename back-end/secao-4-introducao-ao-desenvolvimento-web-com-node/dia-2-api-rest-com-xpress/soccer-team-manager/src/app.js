const express = require('express');

const app = express();
app.use(express.json()); // Prepara nossa API para receber dados

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// Listando times por meio do GET ---------------------------------------------------
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// Cadastrando times por meio do método POST ----------------------------------------
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  return res.status(201).json({ team: newTeam });
});

// Editando times por meio do método PUT ---------------------------------------------
/* todos os dados qu vem por params ou query vem como string */
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

//  Deletando times por meio do método DELETE
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
