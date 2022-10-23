/*
Utilize if/else para fazer um programa que defina três números em constantes e retorne
true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

    Bonus: use somente um if.
*/

let a = 3;
let b = 7;
let c = 24;

let trueOrFalse = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    trueOrFalse = true;
}

console.log(trueOrFalse);