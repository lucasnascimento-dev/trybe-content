/*
Usamos o sort para ordenar, sem parâmetro ele entende que é em 
ordem alfabética.
*/
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();
console.log(food)
//---------------------------------------------------------------------------------

/*
Näo funciona para números de forma direta conforme exemplo abaixo,
temos que usar a funçäo de comparaçäo;
*/
const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort();
console.log(inventory); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory2); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//---------------------------------------------------------------------------------