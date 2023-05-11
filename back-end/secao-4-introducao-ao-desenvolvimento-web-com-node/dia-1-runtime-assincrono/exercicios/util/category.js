const BMI_MAX_AND_MIN = {

  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },

  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },

  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },

  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },

  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },

  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },

};

const category = (bmi) => {
  const situation = Object.keys(BMI_MAX_AND_MIN);

  const foundSituation = situation.find((situation) => {
    const {minBMI, maxBMI} = BMI_MAX_AND_MIN[situation];
    const aboveMin = minBMI ? bmi > minBMI : true;
    const belowMax = maxBMI ? bmi < maxBMI : true;

    return aboveMin && belowMax;
  });

  return foundSituation;
}

module.exports = category;