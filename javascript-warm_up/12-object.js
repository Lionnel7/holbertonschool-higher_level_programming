#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
// Update the 'value' property of the myObject constant.
// Since myObject is a constant, its reference cannot be changed,
// but its properties can be modified.
myObject.value = 89;
console.log(myObject);
