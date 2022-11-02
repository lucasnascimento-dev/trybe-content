/*
Crie uma função que receba uma string e retorne true se for um palíndromo, 
ou false, se não for.

    Exemplo de palíndromo: arara

    verificaPalindrome('arara')
        Retorno esperado: true

    verificaPalindrome('desenvolvimento')
        Retorno esperado: false
*/

let word = "arara";
//----------01234
function checkPalindrome (word) {
    for (let index in word) {
        if (word[index] != word[(word.length-1)-index]){
            return false;
        } else {
            return true;
        }
    }
}

console.log(checkPalindrome(word))