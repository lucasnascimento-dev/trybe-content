fetch("https://api.goprogram.ai/inspiration")
  .then((response) => response.json())
  .then((data) => console.log(data.quote))
  .catch((error) => console.log(`hà algo errado com o link. Erro: ${error.message}`))


