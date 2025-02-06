export const isPrime = (number) => {
  let isPrimeNumber = true;
  if (number <= 1) {
    isPrimeNumber = false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrimeNumber = false;
        return isPrimeNumber;
      }
    }
  }
  return isPrimeNumber;
};
