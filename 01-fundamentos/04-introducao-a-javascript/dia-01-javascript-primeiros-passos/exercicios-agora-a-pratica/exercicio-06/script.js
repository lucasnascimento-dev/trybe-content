/*Utilize switch/case para fazer um programa que receba o nome de 
uma peça de xadrez e retorne os movimentos que ela faz.

    Como desafio, faça o programa funcionar tanto se receber o 
    nome de uma peça com letras maiúsculas quanto com letras 
    minúsculas, sem aumentar a quantidade de condicionais.

    Como dica, você pode pesquisar uma função que faz uma string 
    ficar com todas as letras minúsculas (lower case).

    Se a peça passada for inválida, o programa deve retornar uma 
    mensagem de erro.

    Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let peca = "CAValo";

switch (peca.toLocaleLowerCase()) {
    case peca = "peao":
        console.log("O peão se move uma casa à frente e ataca uma casa na diagonal")
        break;
    case peca = "cavalo":
        console.log("O cavalo se move em 'L', 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás ")
        break;
    case peca = "bispo":
        console.log("O bispo pode se mover apenas na diagonal e a quantidade de casas quiser.")
        break;
    case peca = "torre":
        console.log("A torre pode se mover para frente, para trás, e para os lados por quantas casas quiser.")
        break;
    case peca = "rainha":
        console.log("A rainha pode se mover em qualquer direção por quantas casas quiser.")
        break;
    case peca = "rei":
        console.log("o rei pode se mover em qualquer direção apenas uma casa, a menos que essa casa lhe deixe em cheque.")
        break;
    default:
        console.log("essa peça não existe.")
}
