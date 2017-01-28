// var array = new Array(3); // create array with 3 elements with 'undefined' values
var array = [];
array[999] = 'test';

console.log('Array length: ' + array.length);
console.log('Array: ' + array);

array.push('new element');
console.log('Updated array: ' + array);

var lastElement = array.pop();
console.log(lastElement);

// unshift, shift work's lowest then push, pop
array.unshift('first element');
console.log('Updated array: ' + array);

var firstElement = array.shift();
console.log(firstElement);