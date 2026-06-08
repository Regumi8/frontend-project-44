const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерирует арифметическую прогрессию и прячет один элемент
const generateProgression = () => {
  const length = getRandomNumber(5, 10);      // длина прогрессии от 5 до 10
  const start = getRandomNumber(1, 20);       // первый элемент
  const step = getRandomNumber(1, 10);        // шаг прогрессии
  const hiddenIndex = getRandomNumber(0, length - 1); // позиция скрытого элемента

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return { question, correctAnswer };
};

export const description = 'What number is missing in the progression?';

export const generateRound = () => generateProgression();