const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes')
const app = express();

app.use(express.json());
app.use('/people', peopleRoutes);

app.post('/people', (req, res) => {
  const person = req.body;
  res.status(201).json(person);
})

module.exports = app;