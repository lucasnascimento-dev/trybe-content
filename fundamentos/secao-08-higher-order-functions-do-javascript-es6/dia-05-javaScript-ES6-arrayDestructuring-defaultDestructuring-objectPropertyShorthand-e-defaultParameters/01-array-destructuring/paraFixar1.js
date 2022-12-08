/*
Produza o mesmo resultado do código, porém utilizando o array
destructuring para recolher a função e a saudação.
*/

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [numero1, numero2, numero3] = primeNumbers

const soma = (a, b) => console.log(a + b);

soma(numero1, numero3);