function calculoDivisao(num1, num2) {
  if(num2 === 0) throw new Error('Não pode dividir um número por zero')
  
  const resultado = num1 / num2

  return resultado
}

try {
  const resultado = calculoDivisao(2,1)
  console.log('resultado: %s', resultado)
} catch (e) {
  console.log('erro: %s', e.message)
}

