const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

/*
forEach NÃO tem RETORNO e NÃO espera RETORNO da callback.
*/
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`))
//-------------------------------------------------------------------------

/*
find retorna um único elemento (primeiro que satisfaz) e espera um boleano da callback
*/
console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline'));
//-------------------------------------------------------------------------

/*
some RETORNA um boleado (se satisfaz algum elemento) pode esperar boleano da callback (se).
*/
console.log(pessoas.some((pessoa) => pessoa.idade > 30));
//-------------------------------------------------------------------------

/*
every RETORNA um boleado (se satisfaz todos os elementos) pode esperar boleano da callback (se).
*/
console.log(pessoas.every((pessoa) => pessoa.idade > 30));
//-------------------------------------------------------------------------