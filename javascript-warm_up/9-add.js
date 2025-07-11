#!/usr/bin/node

// Define a function named 'add' that takes two arguments, 'a' and 'b'.
// This function will return the sum of 'a' and 'b'.
function add(a, b) {
  return a + b;
}

// Get the first argument from the command line and convert it to an integer.
// If the argument is not provided or cannot be converted, parseInt will return NaN.
const firstInteger = parseInt(process.argv[2]);

// Get the second argument from the command line and convert it to an integer.
// If the argument is not provided or cannot be converted, parseInt will return NaN.
const secondInteger = parseInt(process.argv[3]);

// Call the add function with the converted integers and print the result.
// If either firstInteger or secondInteger is NaN, their sum will also be NaN,
// which matches the expected output for missing or invalid arguments.
console.log(add(firstInteger, secondInteger));
