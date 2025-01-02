// 1-stdin.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to ALX, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);

	if (process.stdin.isTTY) {
		rl.close();
	}
});
	rl.on('close', () => {
	if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
