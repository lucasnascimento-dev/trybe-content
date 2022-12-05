const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswer, studentAnswer, callback) => {
    let contador = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const callbackReturn = callback(rightAnswer[index], studentAnswer[index]);
        contador += callbackReturn;
    }
    return `Resultado final: ${contador} pontos`
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers))