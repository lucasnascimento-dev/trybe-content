const body = document.querySelector('body');
const paragraph = document.getElementsByClassName('paragraph')[0];
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const header = document.getElementsByTagName('header')[0];
const botaoFundoBranco = document.getElementsByTagName('button')[0]; 
const botaoFundoPreto = document.getElementsByTagName('button')[1]; 
const botaoFundoVerde = document.getElementsByTagName('button')[2]; 
const botaoFundoAzul = document.getElementsByTagName('button')[3];
const botaoFundoAmarelo = document.getElementsByTagName('button')[4];

const backGroundColorBlack = () => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    header.style.borderColor = 'white';
}

const backGroundColorWhite = () => {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    header.style.borderColor = 'green';
}

const backGroundColorGreen = () => {
    body.style.backgroundColor = 'green';
    body.style.color = 'white';
    header.style.borderColor = 'white';
}

const backGroundColorBlue = () => {
    body.style.backgroundColor = 'blue';
    body.style.color = 'white';
    header.style.borderColor = 'white';
}

const backGroundColorYellow = () => {
    body.style.backgroundColor = 'yellow';
    body.style.color = 'black';
    header.style.borderColor = 'black';
}

botaoFundoBranco.addEventListener("click", backGroundColorWhite)
botaoFundoPreto.addEventListener("click", backGroundColorBlack)
botaoFundoVerde.addEventListener("click", backGroundColorGreen)
botaoFundoAzul.addEventListener("click", backGroundColorBlue)
botaoFundoAmarelo.addEventListener("click", backGroundColorYellow)