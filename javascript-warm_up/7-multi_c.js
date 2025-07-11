#!/usr/bin/node

// Get the first argument from the command line.
const firstArgument = process.argv[2];

// Attempt to convert the argument to an integer.
const x = parseInt(firstArgument);

// Check if the conversion resulted in NaN (Not a Number).
if (isNaN(x)) {
  // If it's NaN, the argument could not be converted to a valid integer.
  // This is the first allowed console.log statement.
  console.log('Missing number of occurrences');
} else {
  // If it's a valid number, proceed.
  // Only print "C is fun" if x is strictly positive.
  if (x > 0) {
    // Use a loop to print "C is fun" x times.
    for (let i = 0; i < x; i++) {
      // This is the second allowed console.log statement.
      console.log('C is fun');
    }
  }
  // If x is 0 or negative, but not NaN, nothing is printed,
  // which matches the desired empty output for cases like -3.
}
