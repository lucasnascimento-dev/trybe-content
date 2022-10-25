/*
Faça um programa que retorne o maior de três números. Defina, no 
começo do programa, três constantes com os valores que serão 
comparados.
*/

function comparation (a, b, c) {
    if (a > b && a > c){
        return 'O primeiro valor é o maior';
    } else if (b > a && b >c) {
        return 'O segundo valor é o maior';
    } else {
        return 'O terceiro valor é o maior';
    }
}

console.log(comparation(3, 9 ,8))