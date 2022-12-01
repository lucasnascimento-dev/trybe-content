const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18
idades.find((idade) => idade > 50); // 73
idades.find((idade) => idade === 33); // undefined

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((number) => number % 2 === 0);

console.log(verifyNumbers); // 30