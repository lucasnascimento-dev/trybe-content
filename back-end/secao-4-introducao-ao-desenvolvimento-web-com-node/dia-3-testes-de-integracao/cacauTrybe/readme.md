criando testes com TDD:

1- definindo os cenários de testes (contratos):

  a-> GET/chocolates

      Objetivo: Retornar uma lista com todos os chocolates cadastrados.
      Código HTTP: 200 - OK;
      Body (exemplo):

  [
  { "id": 1, "name": "Mint Intense", "brandId": 1 },
  { "id": 2, "name": "White Coconut", "brandId": 1 },
  { "id": 3, "name": "Mon Chéri", "brandId": 2 },
  { "id": 4, "name": "Mounds", "brandId": 3 }
  ]

  b-> GET/chocolates/:id

      Objetivo: Buscar um chocolate específico pelo ID.
      Código HTTP: 200 - OK;
      Body (exemplo):

  [
  {
  "id": 4,
  "name": "Mounds",
  "brandId": 3
  }
  ]

  c-> GET/chocolates/brand/:brandId

    Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
    Código HTTP: 200 - OK;
    Body (exemplo):

    [
      {
        "id": 1,
        "name": "Mint Intense",
        "brandId": 1
      },
      {
        "id": 2,
        "name": "White Coconut",
        "brandId": 1
      }
    ]

2- iniciando um novo pacote Node.js com npm e instalanbdo as ferramentas mocha e chai:

  npm init -y
  npm install mocha@8.4.0 chai@4.3.4 --save-dev --save-exact

3- organizando o projeto com a criação de diretórios e arquivos básicos. O diretório integration serve para facilitar a organização para separar diferentes tipos de testes:
  .
  ├── src
  ├── tests/
  │   └── integration/
  │       └── chocolates.test.js
  └── package.json

4- Adicionando ao script o teste com mocha:
    "scripts": {
    "test": "mocha tests/**/*.test.js --exit"
  },
  o --exit vai impedir que os testes fiquem executando indefinidamente quando houver erros em funções assíncronas.

5- O chai servirá para simular uma requisição para nossa API

6- criando o app.js dentro de src e instalando o express
  npm install express@4.17.1 --save-exact

7- Após construir a função GET vamos prover o local que ela vai tirar as informações que precisamos:
  .
  ├── src/
  │   ├── files/
  │   │   └── cacauTrybeFile.json
  │   ├── app.js
  │   └── cacauTrybe.js
  ├── tests/
  │   └── integration/
  │       └── chocolates.test.js
  └── package.json
  -> No arquivo cacauTrybeFile.json vai todas as informações sobre os chocolates.
  -> No arquivo cacauTrybe.js focará as funções que irão ler o json acima e nos entregar o que queremos.
  -> Após exportar essas funções e importar o cacauTrybe.js para p app o teste deverá funcionar.

  8- fazendo dubês de testes com o Sinon
    -> usaremos o stub para a função readFile() do fs:
      - importamos o sinon e o fs para o arquivo de testes;
      - criamos um mock do conteúdo json dos chocolates;
      - usamos o sinon para criar um stub que será utilizado na função readFile, essa retornará o mockFile criado anteriormente com as mesmas informações dos chocolates utilizando o resolves, ficando da seguinte forma:
        sinon.stub(fs.promises, 'readFile').resolves(mockFile);
