/* Default object methods */

function findSubstrCount(str, subStr, pos, count) {
    pos = pos || 0;
    count = count || 0;

    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    pos = str.indexOf(subStr, pos);
    if (pos === -1) {
        return count;
    }

    return findSubstrCount(str, subStr, ++pos, ++count);
}

var string = 'test-blah-blah-test-test-blah';
var subString = 'test';

console.log('Result: ' + findSubstrCount(string, subString, 0));