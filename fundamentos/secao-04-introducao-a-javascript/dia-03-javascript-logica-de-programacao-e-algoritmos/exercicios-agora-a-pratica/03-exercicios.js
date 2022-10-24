let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallWord = array[0];
let bigWord = array[0];

for (let index = 0 ; index < array.length ; index += 1) {
    if (array[index].length < smallWord.length) {
        smallWord = array[index];
    }
}

for (index = 0 ; index < array.length ; index += 1){
    if (array[index].length > bigWord.length) {
        bigWord = array[index];
    }
}



console.log(smallWord)
console.log(bigWord)