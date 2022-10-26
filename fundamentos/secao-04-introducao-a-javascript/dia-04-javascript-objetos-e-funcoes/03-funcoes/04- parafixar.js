/*
Faça um programa que, dado um valor recebido como parâmetro, 
retorne “positive” se esse valor for positivo, “negative” se for 
negativo, e caso não seja nem positivo e nem negativo retorne 
“zero”.
*/

function signal (a) {
    if (a > 0) {
        return 'Número positivo'
    } else if (a < 0) {
        return 'Número negativo'
    } else {
        return 'Zero'
    }
}
console.log(signal(0))