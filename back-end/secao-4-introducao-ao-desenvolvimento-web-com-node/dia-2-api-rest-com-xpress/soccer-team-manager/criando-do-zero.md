1- Criar uma pasta src (código fonte);

2- Iniciar um pacote Node.js:
  - npm init -y;
  - ajustar manualmente o package.json criado com as informações pertinentes;
  - após iniciar o npm podemos instalar as dependências que serão necessárias ao longo da construçãoo da API.

3- Instalaremos a framework express para nos auxiliar na organização da API, diminuindo a quantidade de linhas de código.
  - npm i express@4.17.1 --save-exact;
  - cersão escolhida para o projeto afim de evitar comportamentos; inesperados;
  - NÃO ESQUECER DE CRIAR O .gitignore PARA O node_modules;
  
  -- package-lock.json
    - serve para gerenciar as dependências das nossas dependências.
  -- node_modules
    - local de instalação de todas as dependências e dependências das dependências sào instaladas.
  -- npm ls -a
    - mostra a arvore de dependências da nossa aplicação, ou seja, nossa aplicação depende do Express para funcionar, que por sua vez dependará de outros pacotes e assim por diante... Esse comando deixa tudas essas relações de dependência explícita.
  
4- Linter e git
  - npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 --save-dev --save-exact
  - .eslintignore e .eslintrc.json
    - dentro do .eslintignore ficará apenas o node modules que comtém arquivos prontos e não há a necessidade de muda-lo ou corrigi-lo.
    - .eslintrc.json dentro dele vai as regras que desejo sobescrever do ESlint
  *para saber mais sobre a configuração do ESlint podemos ir em:
    https://eslint.org/docs/latest/use/configure/

5- Criando o servidor
  - criamos os arquivos app.js e server.js;
  - no app.js importamos o pacote Express, o executamos em uma const app e o exportamos para ser utilizado no server.js, agora todas as funções do Express serão usadas da seguinte forma: app.<nome_da_função> no server.js;
  - para utilizarmos o Express no server.js, o importamos.
  * Os arquivos foram separados para melhor organização e manutenção do código.

  *O servidor é apenas uma importação do express e um listen, ficando da seguinte forma:
    - app.listen(3001, () => console.log('server running on port 3001'));
      - o primeiro parâmetro é a porta e o segundo a uma função.

6- Nodemon
  - npm i nodemon@2.0.15 --save-dev --save-exact
  - instalamos o nodemon para que ele reinicie sua aplicação automaticamente ao salvar um arquivo.

7 - Scripts
  - no package.json, adicionaremos os seguintes scripts para facilitar os comandos no decorrer do desenvolvimento:
    - "start": "node src/server.js",
    - "dev": "nodemon src/server.js",
    - "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."


