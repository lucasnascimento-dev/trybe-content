const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)
  const simpsonsEnumerated = simpsons.map(({id, name}) => `${id} - ${name}`)

  simpsonsEnumerated.forEach(element => console.log(element));
}

async function getSimpsomId(idSearch) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)

  const characterChosen = simpsons.find((element) => Number(element.id) === idSearch);
  if (!characterChosen) {
    throw new Error('id não encontrado')
  }
  return characterChosen
}

main = () => {
  readAll()
  getSimpsomId(2).then((simpson) => console.log(simpson))
}

main();