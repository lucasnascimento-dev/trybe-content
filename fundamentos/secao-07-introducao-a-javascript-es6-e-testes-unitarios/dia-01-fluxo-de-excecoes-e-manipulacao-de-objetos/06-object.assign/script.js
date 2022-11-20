/*
Como você pode ver, a função Object.assign recebe pelo menos dois 
parâmetros, de forma que o primeiro sempre será o objeto destino, 
e os parâmetros restantes serão os valores que serão adicionados a 
esse objeto destino.
*/
// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)
//--------------------------------------------------------------

/*
Nesse outro exemplo, o clone é exatamente igual ao objeto person, 
e se você mudar qualquer propriedade nele, observará que o objeto 
person também será modificado. 
*/
// const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
//------------------------------------------------------------------

/*
Ao criar uma nova variável para armazenar o retorno do método 
Object.assign, como no exemplo acima, cria-se apenas um outro 
“caminho” para modificar ou acessar os dados do objeto destino 
(nesse caso, person). No exemplo abaixo, é apresentada outra forma 
de se copiar um objeto.

Para resolver esse problema, podemos passar como primeiro parâmetro 
do Object.assign um objeto vazio {} e armazenar seu retorno em uma 
nova variável. Veja como fazer isso no exemplo abaixo.
*/

const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);//com o destino vazio apenas newPerson é modificada
  console.log(person);
