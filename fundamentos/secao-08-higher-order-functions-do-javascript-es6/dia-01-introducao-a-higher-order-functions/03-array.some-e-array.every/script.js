// Verifica se alguma pessoa tem oo cargo Gerência ----------------------------------
const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];

  const verificaCargo = pessoas.some((pessoas) => pessoas.cargo === 'Gerência');

  console.log(verificaCargo);
// Verifica se alguma pessoa tem oo cargo Gerência ----------------------------------

// Recebe uma letra e uma lista e verifica se os nomes iniciam com a letra informada----
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
// Recebe uma letra e uma lista e verifica se os nomes iniciam com a letra informada----

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((grade) => grade.toLocaleLowerCase() === 'aprovado'); // false
  
  console.log(verifyGrades);