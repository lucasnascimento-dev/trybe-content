let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

/*
Utilize array destructuring para produzir o resultado esperado 
pelo console.log acima
*/

[,,, ...numerosPares] = numerosPares
console.log(numerosPares)

/*
aparentemente os 3 primeiros elementos foram redeclarados como vazios
na desestruturação
*/