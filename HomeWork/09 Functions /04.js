// Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterEvenNumbers(numbersArray);
console.log('Even numbers:', evenNumbers);