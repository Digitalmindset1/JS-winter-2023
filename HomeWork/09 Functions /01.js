// Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum; 
}

const numbersArray = [1, 2, 3, 4, 5];

const totalSum = sumArray(numbersArray);
console.log('Sum of numbers', numbersArray, ' = ', totalSum); 

