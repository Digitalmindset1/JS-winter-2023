// Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersArray = getEvenNumbers(numbersArray);
console.log('Even numbers:', evenNumbersArray);
