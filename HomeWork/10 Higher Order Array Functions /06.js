// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

const numbersArray = [5, 10, 15, 20];

function calculateSum(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

const sum = calculateSum(numbersArray);
console.log('Sum of numbers:', sum);