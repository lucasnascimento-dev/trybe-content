const ask = require('./util/ask')
const category = require('./util/category')

const bmiCalculation = (p, h) => {
  console.log(`wheigth: ${p} height:${h}`);
  const bmiResult = p / (h ** 2);
  return bmiResult;
}

const main = () => {
  const weight = ask("What’s your weight?(em kg) ");
  const height = ask("What’s your height?(em m) ");

  const bmi = bmiCalculation(weight, height);
  const situation = category(bmi)
  console.log(`BMI: ${bmi.toFixed(2)}\nSITUATION: ${situation}`)
}

main()