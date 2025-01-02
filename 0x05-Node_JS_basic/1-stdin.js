// 1-stdin.js
const readline = require('readline');

// Create the interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
rl.question('Welcome to ALX, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface and display the closing message
  rl.close();
});

// When the readline interface closes, show the final message
rl.on('close', () => {
  console.log('This important software is now closing');
});

