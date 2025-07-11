#!/usr/bin/node

// Get all arguments passed to the script, excluding 'node' and the script file path.
// The slice(2) method creates a new array containing only the user-provided arguments.
const args = process.argv.slice(2);

// Check the number of arguments.
// If there are no arguments or only one argument, print 0 as per the requirements.
if (args.length <= 1) {
  console.log(0);
} else {
  // Convert all arguments to integers and sort them in descending order.
  // The map(Number) converts each string argument to a number.
  // The sort((a, b) => b - a) sorts the numbers from largest to smallest.
  const sortedNumbers = args.map(Number).sort((a, b) => b - a);

  // The second biggest integer will be at index 1 in the sorted array.
  // This handles cases where there might be duplicate largest numbers (e.g., 5 5 3 -> second biggest is 5).
  // It also handles negative numbers correctly.
  console.log(sortedNumbers[1]);
}
