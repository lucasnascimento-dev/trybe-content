// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

/*
Para adicionar uma nova propriedade ao objeto podemos inserir
manualmente conforme exemplo abaixo:
*/ 

//   const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
//   };
//-----------------------------------------------------------

/*
Poré amelhor maneira de adicionar novas propriedades é de maneira
dinâmica com a notação que preferir conforma exemplo:
*/ 

// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
//   console.log(customer1);// imprimindo valor ANTES de add a propriedade
//   customer1.lastName = 'Faria';
//   console.log(customer1);// imprimindo valor APÓS de add a propriedade

//   const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
//   console.log(customer2)// imprimindo valor ANTES de add a propriedade
//   customer2['lastName'] = 'Silva';
//   console.log(customer2)// imprimindo valor APÓS de add a propriedade
//----------------------------------------------------------

/*
uma maneira ainda mais dinâmica seria:
*/
// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
  
//   const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
//     objeto[novaPropriedade] = valor
//   };
  
//   adicionaPropriedade(customer, newKey, lastName);
//   console.log(customer);
  
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
  
//   adicionaPropriedade(customer, newKey, fullName);
//   console.log(customer);
  //--------------------------------------------------------

/*
Adicione suas informações ao objeto pessoaEstudante = {}, como nome, 
email, telefone, github e linkedIn, usando os métodos aprendidos.
*/

const pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

let newKey = 'Nome';
const nome = 'Lucas';

adicionaPropriedade(pessoaEstudante, newKey, nome);
console.log(pessoaEstudante);

let newKey2 = 'Email';
const email = 'lnascimento.ec@gmail.com';

adicionaPropriedade(pessoaEstudante, newKey2, email);
console.log(pessoaEstudante);

let newKey3 = 'GitHub';
const gitHub = 'lucasnascimento-dev';

adicionaPropriedade(pessoaEstudante, newKey3, gitHub);
console.log(pessoaEstudante);