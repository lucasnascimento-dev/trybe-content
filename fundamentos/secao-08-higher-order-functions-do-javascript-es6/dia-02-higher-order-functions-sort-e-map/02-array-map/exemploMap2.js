/*
Colocar os array em uma lista de objetos
*/

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProductPrice = (arrProduct, arrPrice) =>
 arrProduct.map((produto, index) => ({ [produto]: arrPrice[index] }));

const preencheLista = listProductPrice(products, prices);

console.log(preencheLista)
