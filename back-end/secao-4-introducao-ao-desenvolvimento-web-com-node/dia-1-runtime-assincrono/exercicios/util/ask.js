const readline = require('readline-sync')

const ask = (questionText) => {
  const answer = readline.question(questionText);

  return answer;
}

module.exports = ask;