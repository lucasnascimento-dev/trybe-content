/*
Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b, definidas no 
começo com os valores que serão operados. Faça programas para:

    -Adição (a + b)
    -Subtração (a - b)
    -Multiplicação (a * b)
    -Divisão (a / b)
    -Módulo (a % b)
*/

function sum (a, b) {
    return a + b;
}
console.log(sum(1, 2))

function subtraction (a, b) {
    return a - b;
}
console.log(subtraction(1, 2))

function multiplication (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
}
console.log(division(1, 2))

function module (a, b) {
    return a % b;
}
console.log(module(5, 3))
