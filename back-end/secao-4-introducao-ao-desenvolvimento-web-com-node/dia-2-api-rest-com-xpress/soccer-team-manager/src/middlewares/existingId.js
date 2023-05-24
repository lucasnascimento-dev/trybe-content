const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((element) => element.id === id)) {
    return next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400).json({ message: 'Time não encontrado'});
  }
};

module.exports = existingId;