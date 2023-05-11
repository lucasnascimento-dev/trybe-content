const ask = require('./util/ask')

const bmiCalculation = (weight, height) => {
  console.log(`wheigth: ${weight} height:${height}`);
  const bmiResult = weight / (height ^ 2);
  return bmiResult;
}

function main() {
  const weight = ask("What’s your weight?");
  const height = ask("What’s your height?");

  const bmi = bmiCalculation(weight, height);
  console.log(`BMI: ${bmi.toFixed(2)}`)
}

main()