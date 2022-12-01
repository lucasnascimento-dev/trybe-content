/*
Observar como funciona o reduce no console.
*/
const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
    console.log(`acc:`, acc);
    console.log(`curr:`, curr);
    console.log('a soma atual é', acc + curr);
  
    return acc + curr;
}, 0);

//----------------------------------------------------------------
// Soma os valores do array.

const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
  return acc + curr;
}, 30); // O valorInicial é 30.

console.log(`valor final do acc é ${totalSum}`);

//----------------------------------------------------------------
// Soma os valores do array.

const numbers2 = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum2 = numbers.reduce(sumNumbers, 30);

console.log(totalSum2); //112

//---------------------------------------------------------------
// retorna o maior número do array numbers3.

const numbers3 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers3.reduce(getBigger);
console.log(bigger); // 85

//---------------------------------------------------------------
// Soma os números pares do array  numbers4

const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (acc, curr) => (
    (curr % 2 === 0) ? acc + curr : acc
);

const sumNumbers2 = (array) => array.reduce(sum, 0);// sum pode ser outras funções.
console.log(sumNumbers2(numbers4)); // 85