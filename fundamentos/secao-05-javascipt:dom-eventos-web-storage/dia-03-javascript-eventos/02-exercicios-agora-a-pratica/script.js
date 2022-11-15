const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const createDaysOfTheMonth = () => {
    // const getDayList = document.querySelector('#days')
    const getDayList = document.getElementById('days')
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      let day = decemberDaysList[index];
      let dayItem = document.createElement('li')
      
      dayItem.innerHTML = day;
      if (day === 24 || day === 31) {
        //classe holiday 
        dayItem.className = 'day holiday';
        getDayList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day ===18) {
        //classe friday
        dayItem.className = 'day friday';
        getDayList.appendChild(dayItem);
      } else if ( day === 25) {
        // classe holiday e friday
        dayItem.className = 'day friday holiday';
        getDayList.appendChild(dayItem);
      } else {
        //classe day
        dayItem.className ='day';
        getDayList.appendChild(dayItem);
      }
    }
  }
  createDaysOfTheMonth();
  
  const createHolidayButton = (buttonName) => {
    const buttonContainer = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
    const newButtonId = 'btn-holiday';
    
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    
    buttonContainer.appendChild(newButton);
  }
  createHolidayButton('Feriados');  
  
  const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
      getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays();

  //parte 4
  const createFridayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container')
    let newButton = document.createElement('button');
    let newButtonId = 'btn-friday'

    newButton.innerHTML = buttonName;
    newButton.id = newButtonId; 
    buttonContainer.appendChild(newButton);
  }

  createFridayButton('Sexta-feira');

  //parte 5
  const DisplayFridays = (fridaysArray) => {
    let getFridayButton = document.getElementById('btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/'
    
    getFridayButton.addEventListener('click', () => {
      for (let index = 0; index < fridays.length; index += 1) {
        (fridays[index].innerHTML !== newFridayText) ?
        fridays[index].innerHTML = newFridayText :
        fridays[index].innerHTML = fridaysArray[index];
      }
    });
  }

  DisplayFridays(decemberDaysList);

  // parte 6
  const dayMouseOver = (target) => {
    const days = document.getElementById('days');
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'
    })
  }
  const dayMouseOut = (target) => {
    const days = document.getElementById('days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'
    })
  }
  dayMouseOver();
  dayMouseOut();

  // parte 7
  const addMyTasks = (task) => {
    const tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  }

  addMyTasks('Projeto')

  // Parte 8
  const getTaskColor = (color) => {
    const tasksContainer = document.querySelector('.my-tasks');
    const newTask = document.createElement('div'); //criando um a nova div
    
    newTask.className = 'task'; // adicionando classe para a div
    newTask.style.backgroundColor = color; // Atribuindo cor ao background da div criada

    tasksContainer.appendChild(newTask); // Adicionando nova task criada à task container
  }
  getTaskColor('green')

  // Parte 9
  const selectTask = () => {
    const tarefa = document.querySelector('.task')
    
    tarefa.addEventListener('click', (event) => {
      (event.target.className !== 'task selected') ? 
      event.target.className = 'task selected' : 
      event.target.className = 'task';
      console.log(tarefa)
    })
  }
  selectTask();

  // Parte 10
  const setDayColor = () => {
    const selectedTask = document.getElementsByClassName('selected task') //retorna array com 'task selected'
    const days = document.querySelector('#days'); // seleciona a ul days
    const taskDiv = document.querySelector('.task'); // seleciona primeiro elemento com class task
    const taskColor = taskDiv.style.backgroundColor; //guarda a cor do task em task color

    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = taskColor;
      }
    });
  }
  setDayColor();
