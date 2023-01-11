// função que gera um número aleatório

const generateRandomNumber = () => Math.round(Math.random() * 10);

//função que gera número aleatório, retorna resolve se for par

  const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        //resolve
        resolve(randomNumber)
      } else {
        //reject
        reject(
          new Error(`O número ${randomNumber} não é válido. Somente números pares são válidos.`)
        )
      }
    }, 1000);
  });
  

  randomPromise()
  .then((response) => {
    console.log(`Promise resolvida. O número gerado é: ${response}`)
  })
  .catch((error) => {
    console.log(`Promise rejeitada: ${error.message}`)
  })