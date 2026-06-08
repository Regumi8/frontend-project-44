// Алгоритм Евклида для нахождения НОД
const findNOD = (a, b) => {
  if (b === 0) return a;
  return findNOD(b, a % b);
};

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = findNOD(num1, num2).toString();
  return { question, correctAnswer };
};