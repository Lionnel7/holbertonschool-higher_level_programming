#!/usr/bin/node

// Get the first argument passed to the script.
const firstArgument = process.argv[2];

// Attempt to convert the first argument to an integer.
// parseInt() will parse the integer part of a string (e.g., "89.89" becomes 89).
// If the string cannot be parsed as a number, it returns NaN (Not a Number).
const number = parseInt(firstArgument);

// Check if the result of parseInt() is NaN.
// isNaN() is a global function that determines whether a value is an illegal number (Not-a-Number).
if (isNaN(number)) {
  // If it's NaN, the argument could not be converted to a valid integer.
  console.log('Not a number');
} else {
  // If it's a valid number, print it in the specified format.
  console.log(`My number: ${number}`);
