// Smallest number in array

function findSmallestNumber(numbers) {
    return Math.min(...numbers);
}

const numbersArray = [10, 15, 25, 43, -12];

const smallestNumber = findSmallestNumber(numbersArray);
console.log('The smallest number is:', smallestNumber); 