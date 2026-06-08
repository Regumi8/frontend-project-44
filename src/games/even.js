import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export const runEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};