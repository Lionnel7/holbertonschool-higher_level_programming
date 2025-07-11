#!/usr/bin/node

// Get the first argument from the command line.
const sizeArg = process.argv[2];

// Attempt to convert the argument to an integer.
const size = parseInt(sizeArg);

// Check if the conversion resulted in NaN (Not a Number).
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // If it's a valid number, check if it's positive.
  if (size > 0) {
    // Outer loop for rows
    for (let i = 0; i < size; i++) {
      let row = ''; // Initialize an empty string for each row
      // Inner loop for columns (to build the row of 'X's)
      for (let j = 0; j < size; j++) {
        row += 'X'; // Add 'X' character to the current row string
      }
      console.log(row); // Print the completed row
    }
  }
  // If size is 0 or negative, but not NaN, nothing is printed,
  // which matches the desired empty output for cases like -3.
}
