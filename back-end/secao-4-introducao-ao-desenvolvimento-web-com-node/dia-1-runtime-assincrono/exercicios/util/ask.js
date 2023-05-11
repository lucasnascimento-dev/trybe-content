const readline = require('readline-sync')

const ask = (questionText) => {
  const answer = readline.questionFloat(questionText);

  return answer;
}

module.exports = ask;