let array = ['java', 'javascript', 'python', 'html', 'css', 'paralelepípedo'];
let smallWord = array[0];
let bigWord = array[0];

for (let index = 0 ; index < array.length ; index += 1) {
    if (array[index].length < smallWord.length) {
        smallWord = array[index];
    }
    if (array[index].length > bigWord.length) {
        bigWord = array[index];
    }
}

console.log(smallWord)
console.log(bigWord)

// for (index = 0 ; index < array.length ; index += 1){
//     if (array[index].length > bigWord.length) {
//         bigWord = array[index];
//     }
// }