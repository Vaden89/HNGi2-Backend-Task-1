export const getProperties = (number) => {
  const properties = [];
  if (checkIfArmstrong(number)) {
    properties.push("armstrong");
  }
  if (number % 2 === 0) {
    properties.push("even");
  } else {
    properties.push("odd");
  }

  return properties;
};

const checkIfArmstrong = (number) => {
  const numString = String(number).split("");
  let noOfDigits = numString.length;
  let sumTotal = 0;
  numString.forEach((e) => {
    sumTotal += e ** noOfDigits;
  });

  return sumTotal === number;
};
