const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com'));

  /*
as propriedades do objeto retornado e os argumentos que passamos 
para newUser são idênticos, podemos eliminá-los:
*/

const newUser1 = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser1(54, 'isabella', 'isabella@email.com'));