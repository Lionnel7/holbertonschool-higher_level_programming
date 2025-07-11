#!/usr/bin/node

// Define a recursive function to compute the factorial of a number.
// Constraints:
// - Factorial of NaN is 1.
// - Must be recursive.
// - Must use a function.
function factorial(n) {
  // Base case 1: If n is NaN (Not a Number), return 1 as per the requirement.
  // This handles cases where the argument is missing or cannot be converted to an integer.
  if (isNaN(n)) {
    return 1;
  }

  // Base case 2: If n is 0 or 1, the factorial is 1.
  // This also handles negative integers by returning 1, aligning with the NaN case for invalid inputs.
  if (n <= 1) {
    return 1;
  }

  // Recursive step: n * factorial(n - 1)
  // This calls the function itself with a decremented value of n until a base case is reached.
  return n * factorial(n - 1);
}

// Get the first argument from the command line.
// process.argv[2] contains the first user-provided argument.
const arg = process.argv[2];

// Convert the argument to an integer.
// parseInt() will return NaN if the argument cannot be converted to a number.
const number = parseInt(arg);

// Compute the factorial using the defined function.
const result = factorial(number);

// Print the result to the console.
// This satisfies the constraint of using console.log() for all output.
console.log(result)
