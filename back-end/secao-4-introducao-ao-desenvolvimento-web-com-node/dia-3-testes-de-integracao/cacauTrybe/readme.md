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
