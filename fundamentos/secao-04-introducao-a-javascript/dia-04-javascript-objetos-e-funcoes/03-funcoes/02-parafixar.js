/*
Faça um programa que retorne o maior de dois números. Defina, no 
começo do programa, duas constantes com os valores que serão 
comparados.
*/

function comparation (a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(comparation(9, 3))
