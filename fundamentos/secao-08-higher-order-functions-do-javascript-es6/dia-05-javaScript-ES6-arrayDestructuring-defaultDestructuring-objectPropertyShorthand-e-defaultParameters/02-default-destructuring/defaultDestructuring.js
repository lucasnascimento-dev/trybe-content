/*
Quando tentamos acessar uma propriedade que não existe, o valor 
retornado é undefined. E se você quisesse dar um valor padrão para 
alguma chave, caso essa propriedade não existisse no objeto?
*/
const person = {
  name: "João",
  lastName: "Jr",
  age: 34,
};

const { nationality = "Brazilian" } = person;

console.log(nationality);

// Desestruturando um array:

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
