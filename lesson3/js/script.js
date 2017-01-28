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

/* Objects */
var person = {
    firstName: "",
    lastName: "",
    age: undefined
};

console.log('Object: ' + person);
console.log(person.age in person);

function isEmpty(object) {
    for (var key in object) {
        return true;
    }

    return false;
}

var emptyObject = {};

console.log(isEmpty(person));
console.log(isEmpty(emptyObject));

var phoneCodes = {
    us: "1",
    ua: "38",
    ru: "7"
};

console.log("\nPhone codes:");
for (var key in phoneCodes) {
    console.log(phoneCodes[key]);
}