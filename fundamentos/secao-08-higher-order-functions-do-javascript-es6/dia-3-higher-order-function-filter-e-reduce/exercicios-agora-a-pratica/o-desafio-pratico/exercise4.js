const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  const lettersArray = names.join('').toLocaleLowerCase().split('')

  const countA = () => {
    return lettersArray.reduce((acc, curr) => 
    curr === 'a' ? acc += 1 : acc, 0)
  }

  console.log(countA())