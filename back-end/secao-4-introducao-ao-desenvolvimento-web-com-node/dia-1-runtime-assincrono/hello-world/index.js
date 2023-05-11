const readline = require('readline-sync');

const name = readline.question('qual seu nome? ')
const age = readline.questionInt('qual sua idade? ')

console.log(`Hello ${name}, you are ${age} years old!`)