/*
Passar todos o s números abaixo para negativo.
*/

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((element) =>
 element > 0 ? element * (-1) : element * 1)

 console.log(negativeNumbers)