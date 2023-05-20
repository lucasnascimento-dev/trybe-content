const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((element) => element.id === id)) {
    return next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

module.exports = existingId;