/* Output */
alert('Hello, world!');
console.log('Hello, World!');

/* Vars, data types */
var number = 2;
var float = 2.5;
var str = 'Hello';
var bool = true;
var obj = {};
var undefined;
var nullable = null;

console.log(number + ' - ' + typeof number);
console.log(float + ' - ' + typeof float);
console.log(str + ' - ' + typeof str);
console.log(bool + ' - ' + typeof bool);
console.log(undefined + ' - ' + typeof undefined);
console.log(obj + ' - ' + typeof obj);
console.log(nullable + ' - ' + typeof nullable);

console.log('string' - 2); // Not a number
console.log(8 / 0); // Infinity

/* Operators */

// Math plus
var a = 2;
var b = 1;
console.log(a + b);

// Concat
var str = 'Mark - ';
console.log(str + a);

// String to number
var number = '3';
console.log(typeof +number + ' - ' + number);
// or
console.log(typeof -number + ' - ' + number);
