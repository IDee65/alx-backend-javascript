const readline = require('readline');

// create the process im and out interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  rl.on('line', (ans) => {
    console.log(`Your name is: ${ans}`);
    process.exit();
  });
}

rl.on('line', (ans) => {
  console.log(`Your name is: ${ans}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
});

rl.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});