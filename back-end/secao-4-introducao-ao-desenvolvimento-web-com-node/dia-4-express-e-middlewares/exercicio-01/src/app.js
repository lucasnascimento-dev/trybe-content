const express = require("express");
const validateName = require("./middlewares/validateName");
const validatePrice = require("./middlewares/validatePrice");
const validateDescription = require("./middlewares/validateDescription");
const validatedAt = require("./middlewares/validatedAt");
const validateRating = require("./middlewares/validateRating");
const validateDifficulty = require("./middlewares/validateDifficulty");

const app = express();

app.use(express.json());

app.post(
  "/activities",
  validateName,
  validatePrice,
  validateDescription,
  validatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
  }
);

module.exports = app;
