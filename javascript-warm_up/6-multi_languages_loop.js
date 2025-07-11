#!/usr/bin/node

// Create an array of strings containing the three lines to be printed.
const linesToPrint = [
  'C is fun',
  'Python is cool',
  'JavaScript is amazing'
];

// Use the forEach method to iterate over each element in the array.
// The forEach method is a loop that executes a provided function once for each array element.
linesToPrint.forEach(line => {
  // Print each line using console.log().
  // This satisfies the constraint of using only one console.log statement in the code,
  // even though it will be executed multiple times by the loop.
  console.log(line);
});
