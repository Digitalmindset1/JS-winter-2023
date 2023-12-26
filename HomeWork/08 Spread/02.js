// Write a function that takes in an array of strings and a string to add to the beginning of the array, and returns a new array with the string added to the beginning.
function addStringToBeginning(arr, str) {
    return [str, ...arr];
}

const originalArray = ['banana', 'apple', 'cherry'];
const newString = 'mango';

const newArray = addStringToBeginning(originalArray, newString)
console.log(newArray);