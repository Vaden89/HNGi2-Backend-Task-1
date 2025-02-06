export const isPerfect = (number) => {
  let isPerfect = false;
  let total = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      total += i;
    }
  }
  return total === number;
};
