const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

  console.log(pessoas.filter((pessoa) => pessoa.idade < 30));
  console.log(pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0));