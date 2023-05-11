const weight = 80
const height = 1.78

const bmiCalculation = (weight, height) => {
  console.log(`wheigth: ${weight} height:${height}`);
  const bmiResult = weight / (height ^ 2);
  return bmiResult;
}

function main() {
  const bmi = bmiCalculation(weight, height);
  console.log(`BMI: ${bmi.toFixed(2)}`)
}

main()