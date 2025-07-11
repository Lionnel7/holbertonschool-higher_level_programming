#!/usr/bin/node

// The first argument passed to the script by the user will be at index 2 of process.argv.
// process.argv[0] is 'node' (or the path to the Node.js executable).
// process.argv[1] is the path to the script file itself.
const firstArgument = process.argv[2];

// Check if the first argument is undefined (meaning no argument was provided by the user).
// We are not allowed to use 'length', so checking for undefined at index 2 is the alternative.
if (firstArgument === undefined) {
  console.log('No argument');
} else {
  // If an argument is found, print its value.
  console.log(firstArgument);
