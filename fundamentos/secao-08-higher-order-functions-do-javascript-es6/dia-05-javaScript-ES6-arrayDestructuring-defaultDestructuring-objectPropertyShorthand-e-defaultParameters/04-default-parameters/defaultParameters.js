/*
O retorno undefined se da porque nao passamos o parâmetro ao chamarmos
a função
*/
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
//-----------------------------------------------------

/*
uma forma de corrigir o problema citado a cima seria:
*/
const greeting1 = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting1(); // Welcome pessoa usuária!
//-----------------------------------------------------
  
/*
com o ES6 podemos pré-definir um parâmetro. Assim, o default será utilizado 
caso nenhum argumento seja fornecido à função, conforme exemplo abaixo:                                                                                   
*/
const greeting2 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting2(); // // Welcome pessoa usuária!
