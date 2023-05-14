const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, "./movies.json");

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(`O arquivo não pôde ser lido: ${error}`)
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find((movie) => movie.id === Number(req.params.id));
    return res.status(200).json(movie)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
});


module.exports = app;
