const express = require("express");

const auth = require("./middlewares/auth");
const validateName = require("./middlewares/validateName");
const validatePrice = require("./middlewares/validatePrice");
const validateDescription = require("./middlewares/validateDescription");
const validatedAt = require("./middlewares/validatedAt");
const validateRating = require("./middlewares/validateRating");
const validateDifficulty = require("./middlewares/validateDifficulty");

const generateToken = require("./utils/generateToken");

const app = express();

app.use(express.json());

app.post(
  "/activities",
  auth,
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

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: "Campos ausentes!" });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
