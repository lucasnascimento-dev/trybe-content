/*
 Analisando o enunciado, sabemos que:

    -devemos utilizar o array fruits;
    -o termo “percorra“ indica uma estrutura de repetição, ou loop;
    -“somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
    -o termo “caso“ indica uma estrutura condicional, ou if;
    -“imprima o valor final“ indica um console.log;

    BABY STEPS:

    1-Adicionar o array;
    2-Criar uma variável com valor 0;
    3-Criar um loop que percorre o array;
    4-Incrementar a variável com o valor correspondente a cada loop;
    5-Criar um if com a condição de a variável ser maior que 15;
    6-Caso a variável obedeça à condição:
        6.1-Imprimir a variável
    7-Caso não obedeça à condição:
        7.1-Imprimir a mensagem “valor menor que 16”.


*/

//---------------------------------BABY STEP 1---------------------------------
let fruits = [3, 4, 10, 1, 12];
//---------------------------------BABY STEP 1---------------------------------

//---------------------------------BABY STEP 2---------------------------------
let sum = 0;
//---------------------------------BABY STEP 2---------------------------------

//---------------------------------BABY STEP 3---------------------------------
for (index = 0 ; index < 5 ; index += 1) {
    sum += fruits[index]//<<<<-----BABY STEP 4---------------------------------
}
//---------------------------------BABY STEP 3---------------------------------

//---------------------------------BABY STEP 5---------------------------------
if (sum > 15) {
    console.log(sum)//<<<<---------BABY STEP 6 / 6.1---------------------------
}
else {
    console.log("valor menor que 16")//<<<<--BABY STEP 7 / 7.1-----------------
}
//---------------------------------BABY STEP 5---------------------------------

/*
 Quando estiver escrevendo um algoritmo, sempre responda às seguintes perguntas:

    Eu resolvi o problema?
    Havia outras maneiras de resolver o problema?
    A maneira que eu escolhi foi a mais eficiente possível?
    Seria possível inverter ou retirar algum passo?
    Se eu fosse um computador, conseguiria entender todas as instruções?

Lembre-se sempre: se você travar em algum exercício, recomece seu 
raciocínio com baby steps! 
*/
