/*
Modo de utilizar o foreach:

array.forEach((element, index) => {
    // código a ser executado
  });
*/
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues: nome do array a ser percorrido.
// .foeEach: a HOF usada. seria a mesma estrutura para qualquer HOF.
// element: valor do elemento do array.
//(element, index) => { /* código */ }: função a ser executada. 

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

// O forEach é uma HOF que NÃO RETORNA NADA! ele executa uma função em cada elemento do array
// exemplo 1------------------------------------------------------------

// lista de nomes
const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; 

pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); 
    // acima é acessado cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']
// exemplo 1---------------------------------------------------------------

// exemplo 2---------------------------------------------------------------

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const emailChecker = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
  }
  
  emailListInData.forEach(emailChecker);
// exemplo 2---------------------------------------------------------------

