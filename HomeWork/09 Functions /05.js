// Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

function filterStringsStartingWithA(strings) {
    return strings.filter(str => str.charAt(0).toUpperCase() === 'A');
}

const stringsArray = ['Apple', 'Banana', 'Orange', 'Avocado', 'Grapes'];

const stringsStartingWithA = filterStringsStartingWithA(stringsArray);
console.log('Strings starting with "A":', stringsStartingWithA);

