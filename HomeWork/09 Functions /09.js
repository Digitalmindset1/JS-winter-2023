// Write a function that takes in an array of strings and returns the longest string in the array.

function findLongestString(strings) {
    return strings.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}

const stringsArray = ['apple', 'banana', 'murtazin', 'niiaz'];

const longestString = findLongestString(stringsArray);
console.log('The longest string is:', longestString); 
