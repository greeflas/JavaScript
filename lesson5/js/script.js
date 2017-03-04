function makeCounter() {
    var counter = 1;
    return function () {
        return counter++;
    };
}

var counter = makeCounter();
// call counter() in console