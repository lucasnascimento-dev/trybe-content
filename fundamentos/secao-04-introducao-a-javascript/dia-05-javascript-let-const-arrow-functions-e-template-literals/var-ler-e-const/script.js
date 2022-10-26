let x = 3;
let boll = false
function func(boll) {
    if (true) {
        x = 48;
    }
    return x;
}

console.log(func(true));
console.log(func(false));