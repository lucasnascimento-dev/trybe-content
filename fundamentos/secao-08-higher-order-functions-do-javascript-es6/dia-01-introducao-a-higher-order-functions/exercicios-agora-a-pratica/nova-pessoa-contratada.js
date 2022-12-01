const newEmployees = (callback) => {
    const employees = {
      Jogador1: callback('Vinicius Junior'), 
      Jogador2: callback('Everton Ribeiro'), 
      Jogador3: callback('Bruno Guimaraes'), 
    }
    return employees;
  };

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(/ /g,'_');
  return {fullName, email:`${email}@selecao.com`}
};

console.log(newEmployees(employeeGenerator));