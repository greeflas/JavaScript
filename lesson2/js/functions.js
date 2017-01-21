/* function declaration */
function symbolCounter(string, symbol) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            counter++;
        }
    }

    return counter;
}

var string = prompt('Input a string', '');
var symbol = prompt('Input a symbol', '');
var res = symbolCounter(string, symbol);

console.log('In string "' + string + '" i fined - "' + res + '" symbols');

/* function expression */
var calc = function (a, b, op) {
    var res;
    switch (op) {
        case '+':
            res = a + b;
            break;
        case '-':
            res  = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        default:
            res = 'Incorrect operation!';
    }

    return res;
}

var a = +prompt('Input a', '');
var b = +prompt('Input b', '');
var op = prompt('Input operation (+, -, *, /)', '');

alert('Result: ' + calc(a, b, op));