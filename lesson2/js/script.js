/* if-else, do-while */
// var login = '';
//
// do {
//     login = prompt('Input your login', '');
//     if (login === null) {
//         alert('Log in is by user exited...');
//         break;
//     }
// } while(login !== 'admin');
//
// if (login === 'admin') {
//     var password = prompt('Input your password', '');
//
//     var message = '';
//     if (password === '123') {
//         message = 'Welcome to dashboard!';
//     }
//     else {
//         message = 'Password is wrong!';
//     }
//
//     alert(message);
// }

/* while */
// var n = +prompt('Input a number', '');
// var power = +prompt('Input the power', '');
//
// var counter = 0;
// var res = n;
// while (++counter < power) {
//     res *= n;
// }
//
// alert('Result: ' + res);

/* for */
// var n = +prompt('Input a number', '');
// for (var i = 0; i < n; i++) {
//     if (i % 4 == 0) {
//         console.log(i);
//     }
// }

/* break, continue */
// var num = +prompt('Input a number', '');
// for (var i = 0; i < num; i++) {
//     if (i === 40) {
//         break;
//     }
//     if (i % 4 == 0) {
//         continue;
//     }
//
//     console.log(i);
// }

/* division table */
//var output = '';
//for (var i = 2; i < 11; i++) {
//    for (var j = 2; j < 11; j++) {
//        output += (i * j) + '\t';
//    }
//    output += '\n';
//}
//
//console.log(output);

/* Simple numbers */
var n = prompt('Input a number', '');
for (var i = 0; i < n; i++) {
    var isSimple = true;
    for (var j = 0; j < i; j++) {
        if ((i % j == 0) && (j != i) && (j != 1)) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        console.log(i);
    }
}