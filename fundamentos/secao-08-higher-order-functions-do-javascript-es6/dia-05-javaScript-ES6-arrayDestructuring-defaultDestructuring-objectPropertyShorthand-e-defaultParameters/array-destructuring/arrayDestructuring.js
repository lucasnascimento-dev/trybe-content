const user = {
  name: 'Marlete',
  age: 60
};

// desestruturamos a propriedade name e atribuímos como variável
const { name } = user;

// conseguimos utilizar a propriedade como variável
console.log(name); // Marlete
console.log(user.name)

//----------------------------------------- EXEMPLO 2 -----------------------------------------
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Usando o array destructuring, temos:

const [firstCountry2, secondCountry2, thirdCountry2, fourthCountry2] = arrayCountries;

console.log(firstCountry2); // Brazil
console.log(secondCountry2); // Japan
console.log(thirdCountry2); // China
console.log(fourthCountry2); // Canada