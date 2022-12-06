// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Manga', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em pó', 'Nescau', 'açucar'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));