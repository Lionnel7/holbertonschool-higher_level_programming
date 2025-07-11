#!/usr/bin/node

// Define the function named 'add' that takes two parameters, 'a' and 'b'.
// This function computes the sum of 'a' and 'b'.
function add(a, b) {
  return a + b;
}

// Export the 'add' function so it can be imported and used in other files.
// This makes the function "visible from outside" as required.
module.exports = {
  add: add
};
