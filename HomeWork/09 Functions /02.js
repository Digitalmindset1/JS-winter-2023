// Write a function that takes in a string and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = 'New York!';
const reversed = reverseString(originalString);
console.log('Reversed string:', reversed);
