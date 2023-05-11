const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)
  const simpsonsEnumerated = simpsons.map(({id, name}) => `${id} - ${name}`)

  const result = simpsonsEnumerated.forEach(element => console.log(element));
  console.log(result)
}

main = () => {
  readAll();
}

main();