
// Write a function that takes in an array of strings and returns a new array containing all the strings in alphabetical order.

const originalArray = ['banana', 'apple', 'cherry'];

function sortArrayAlphabetically(strings) {
    return strings.slice().sort();
}

const sortedArray = sortArrayAlphabetically(originalArray);
console.log('Sorted array:', sortedArray);


