#!/usr/bin/env node

import { welcomeUser } from '../src/cli.js';
import { runEvenGame } from '../src/games/even.js';

const main = () => {
  const name = welcomeUser();
  const isWin = runEvenGame(name);
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

main();