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

async function removeCharacter(a, b) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)

  const characterChosen = simpsons
    .filter((element) => Number(element.id) !== a && Number(element.id) !== b );
  await fs.writeFile('./simpsons.json', JSON.stringify(characterChosen));
}

async function CreateFile() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)

  idToBeRemoved = [1, 2, 3, 4]
  const characterChosen = simpsons
    .filter((element) => idToBeRemoved.includes(Number(element.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(characterChosen));
}

main = () => {
  //readAll()
  //getSimpsomId(2).then((simpson) => console.log(simpson))
  //removeCharacter(10, 6)
  CreateFile()
}

main();