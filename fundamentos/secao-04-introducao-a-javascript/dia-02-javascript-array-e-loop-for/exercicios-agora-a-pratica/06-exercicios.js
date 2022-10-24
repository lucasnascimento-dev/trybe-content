let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOdd = 0

for (index = 0 ; index < 10 ; index += 1 ) {
    if (numbers[index] % 2 != 0) {
        numbersOdd += 1;
    }
}

if (numbersOdd == 0) {
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(numbersOdd)
}
