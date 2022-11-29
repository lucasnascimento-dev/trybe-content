/*
-O nome das pessoas convidadas está salvo em um array chamado names;
-A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. 
Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, 
e name, que é o nome a ser verificado na lista de convidados (array names).

Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. 
Caso contrário, deve ser false.
*/
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((currentName) => currentName === name);

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

//---------------------------------------------------------------------------------------

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
//   console.log(people[0].age)

const verifyAges = (arr, idadeMin) => {
    return arr.every((pessoa) => pessoa.age >= idadeMin);
};

  
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));