export class FactService {
  static async getFunFact(number) {
    const response = await fetch(`http://numbersapi.com/${number}`);
    const fact = await response.text();
    return fact;
  }
}
