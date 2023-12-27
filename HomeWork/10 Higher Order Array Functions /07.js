// Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.

const stringsArray = ['hello', 'world', 'javascript'];

function convertToUpperCase(strings) {
    return strings.map(str => str.toUpperCase());
}

const uppercaseArray = convertToUpperCase(stringsArray);
console.log('Uppercase strings:', uppercaseArray);
