/*
Colocar os array em uma lista de objetos
*/

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const Lista = (elementProduct, elementPrices) => 
elementProduct.map((product, index) => (
{ [product]: elementPrices[index] }
));

const elementProduct = Lista(products, prices);

console.log(elementProduct)