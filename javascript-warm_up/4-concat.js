#!/usr/bin/node

// Get the first argument from the command line. It's at index 2 of process.argv.
// If no argument is provided, this will be undefined.
const firstArgument = process.argv[2];

// Get the second argument from the command line. It's at index 3 of process.argv.
// If no argument is provided, this will be undefined.
const secondArgument = process.argv[3];

// Print the arguments in the specified format: "firstArgument is secondArgument".
// If an argument is undefined, 'undefined' will be printed as a string.
console.log(`${firstArgument} is ${secondArgument}`);
