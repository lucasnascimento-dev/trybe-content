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
