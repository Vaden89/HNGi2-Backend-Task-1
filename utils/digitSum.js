export const digitSum = (number) => {
  const arr = String(number).split("");
  let sum = 0;
  arr.map((item) => {
    sum += Number(item);
  });

  return sum;
};
