const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];


const filtro = dados.filter((item) => typeof item === 'string');

console.log(filtro)


const filtro2 = dados.filter((item) => typeof item === 'number');

console.log(filtro2)