let numbers = [1,2,3,4,5];

numbers.forEach((number, index, array) => {
    array[index] = number * 2;
})
console.log(numbers);
