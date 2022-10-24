let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = numbers[0];

for (index = 0 ; index < 10 ; index += 1) {
    if (numbers[index] < lowerValue) {
        lowerValue = numbers[index];
    }
}

console.log(lowerValue)