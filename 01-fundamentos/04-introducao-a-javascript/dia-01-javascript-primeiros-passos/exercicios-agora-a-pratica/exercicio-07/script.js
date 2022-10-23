/*
Utilize if/else para fazer um programa que converta uma nota dada em porcentagem 
(de 0 a 100) em conceitos de A a F. Siga essas regras:

    -Porcentagem >= 90 -> A

    -Porcentagem >= 80 -> B

    -Porcentagem >= 70 -> C

    -Porcentagem >= 60 -> D

    -Porcentagem >= 50 -> E

    -Porcentagem < 50 -> F

    -O programa deve retornar uma mensagem de erro e encerrar se a nota passada for 
    menor que 0 ou maior que 100.
*/

let nota = 10;

nota_percentual = nota*10;

if (nota_percentual > 100 || nota_percentual < 0) {
    console.log("ERRO - Nota inválida")
}
else if (nota_percentual >= 90) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito A")
}
else if (nota_percentual >= 80) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito B")
}
else if (nota_percentual >= 70) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito C")
}
else if (nota_percentual >= 60) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito D")
}
else if (nota_percentual >= 50) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito E")
}
else if (nota_percentual < 50) {
    console.log("Você atingiu - "+nota_percentual+"% - conceito F")
}
