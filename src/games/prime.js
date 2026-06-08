// проверка, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber.toString();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};