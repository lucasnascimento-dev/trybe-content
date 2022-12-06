const product = {
    id: 1,
    name: 'Camiseta',
};

const newProduct = {...product, price:13};

console.log(product);
console.log(newProduct)

/*
realizando o spread de 2 objetos diferentes em um novo objeto
*/

const produto = {
    id: 1,
    name: 'Camiseta',
};

const produtoPreco = {
  price: 23
}

const novoProduto = {...produto, ...produtoPreco}

console.log(produto)
console.log(produtoPreco)
console.log(novoProduto)