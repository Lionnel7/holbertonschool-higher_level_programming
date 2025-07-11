#!/usr/bin/node

// process.argv is an array containing the command-line arguments.
// The first element will be 'node', the second element will be the name of the JavaScript file.
// The actual arguments start from index 2.
const numberOfArguments = process.argv.length - 2; // Subtract 2 to get only the user-provided arguments

if (numberOfArguments === 0) {
  // If no arguments are passed (length is 2: node_path, script_path)
  console.log('No argument');
} else if (numberOfArguments === 1) {
  // If only one argument is passed (length is 3: node_path, script_path, arg1)
  console.log('Argument found');
} else {
  // If more than one argument is passed
  console.log('Arguments found');
}
