const header = document.getElementById('header-container');
const urgent = document.getElementsByClassName('emergency-tasks')[0];
const urgentTasks = document.getElementsByTagName('h3');
const notUrgent = document.getElementsByClassName('no-emergency-tasks')[0];
const footer = document.getElementById('footer-container')

//atribuindo cor ao header
header.style.backgroundColor = ('rgb(0, 176, 105)');

//atribuindo cor de fundo ao urgente
urgent.style.backgroundColor = ('salmon');

//atribuindo cor de fundo ao urgente
notUrgent.style.backgroundColor = ('yellow');

//atribuindo cor de fundo ao urgente e importante e ao urgente e não importante
urgentTasks[0].style.backgroundColor = ('violet');
urgentTasks[1].style.backgroundColor = ('violet');

//atribuindo cor de fundo ao não-urgente e importante e ao não-urgente e não importante
urgentTasks[2].style.backgroundColor = ('black');
urgentTasks[3].style.backgroundColor = ('black');

//atribuindo cor ao rodapé
footer.style.backgroundColor = ('green')