// Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays

const array1 = [1,2,3];
const array2 = [4,5,6];

function mergeArrays (arr1, arr2) {
    return [...arr1, ...arr2];
}

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray)

