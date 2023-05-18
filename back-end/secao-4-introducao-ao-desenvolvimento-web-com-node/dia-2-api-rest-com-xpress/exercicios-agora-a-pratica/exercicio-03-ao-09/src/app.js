const express = require("express");
const { read } = require("fs");
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

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.map((movie) => movie);
    return res.status(200).json(movie)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;

    const newMovie = {
      id: movies[movies.length -1].id + 1,
      movie,
      price,
    }
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);

  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price} = req.body;
    const movies = await readFile();

    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    
    const updatedMovies = JSON.stringify(movies, null, 2)
    await fs.writeFile(moviesPath, updatedMovies)

    res.status(200).json(movies[index]);

  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
});

app.delete('movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
  
    const filteredMovies = movies.filter((element) => element.id !== Number(id));
    
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
  
    res.status(204).end();
  
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
});

module.exports = app;