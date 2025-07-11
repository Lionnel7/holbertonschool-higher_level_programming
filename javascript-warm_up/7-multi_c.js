#!/usr/bin/node

// Get the first argument from the command line.
const firstArgument = process.argv[2];

// Attempt to convert the argument to an integer.
const x = parseInt(firstArgument);

// Check if the conversion resulted in NaN (Not a Number) or if the number is not positive.
// If x is 0 or negative, nothing should be printed as per the example output.
if (isNaN(x) || x <= 0) {
  // This is the first allowed console.log statement.
  console.log('Missing number of occurrences');
} else {
  // Use a loop to print "C is fun" x times.
  // A 'for' loop is suitable here.
  for (let i = 0; i < x; i++) {
    // This is the second allowed console.log statement.
    console.log('C is fun');
  }
}
