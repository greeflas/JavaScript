function makeCounter() {
    var counter = 1;
    return function () {
        return counter++;
    };
}

var counter = makeCounter();
// call counter() in console

function timer() {
    var counter = function () {
        return counter.number++;
    }
    counter.number = 1;

    counter.set = function (value) {
        counter.number = value;
    }

    counter.reset = function () {
        counter.number = 1;
    }

    return counter;
}

var myTimer = timer();

function buffer () {
    var buffer = '';
    var bufferizer = function (piece) {
        if (piece) {
            buffer += piece;
        }
        else {
            return buffer;
        }
    }
    bufferizer.clear = function (cutLength) {
        if (cutLength && !isNaN(cutLength)) {
            buffer = buffer.slice(0, buffer.length - cutLength);
        }
        else {
            buffer = '';
        }
    }

    return bufferizer;
}

var buf = buffer();