/*
Utilize if/else para fazer um programa que defina três constantes 
com os valores dos três ângulos internos de um triângulo. Retorne 
true se os ângulos representarem os ângulos de um triângulo e 
false, caso contrário. Se algum ângulo for inválido, o programa 
deve retornar uma mensagem de erro. 
*/
let angulo_1 = 30;
let angulo_2 = 90;
let angulo_3 = 60;

if (angulo_1 < 0 || angulo_2 < 0 || angulo_3 < 0) {
    console.log('ERRO - ângulo inválido')
}
else if (angulo_1 + angulo_2 + angulo_3 == 180) {
    console.log(true)
}
else {
    console.log(false)
}
