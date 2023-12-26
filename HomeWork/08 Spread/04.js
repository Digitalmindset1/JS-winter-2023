// Write a function that takes in an array of numbers and returns the largest number in the array.

const numbersArray = [4, 8, 1, 6, 9, 2];

function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }

    let largest = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; // 
        }
    }

    return largest;
}


const largestNumber = findLargestNumber(numbersArray);
console.log('Largest number:', largestNumber); 
