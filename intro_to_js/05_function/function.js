// Create function which takes two param and outputs or returns sum of both param

// function addNumbers (a,b) {
//     let sum = a + b;
//     console.log(`${a} + ${b} = ${sum}`);
//     console.log('Adding more logic')
//     return sum;
// }

// // Call above function to add two value
// let result = addNumbers(3,6);
// let resultTwo = addNumbers(10,6);


// // 
// /* Counting Vowels
// Create a program that counts the number of tvowels in a given string.
// Tha program should run based on a declared string variable,
// and then display the number of towels in the string.

// */

// let userSentence = 'Niiaz Murtazin';


// function findVowelCount(text) {
//     let vowels = 'aeiouAEIOU';
// let count = 0;

// for(let i = 0; i < text.length; i++) {
//     if(vowels.includes(text[i])) {
//         console.log(text[i])
//         count++;
//     }
// }
// return count;
// }


// let newYorkCount = findVowelCount('New York');
// console.log(newYorkCount)

// White a function to reverse array
// function multiplicationTable(number) {
//     for (let i =1; i <= 10; i++) {
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`)
// }
// }


// multiplicationTable(5);

// multiplicationTable(12);

// Write a function to calculate the area a rectangle
// function calculateRectangleArea(width, height) {
//     let area = width * height;
//     return area;
// }
// let areaOfTable = calculateRectangleArea(12,10)
// console.log(areaOfTable)


// Write a function to convert Celcius to Fahrenhite

// function celciusToFahrenheit(celcius) {
//     let fahrenheit = (celcius * 9/5) + 32;
//     return fahrenheit;
// }
// console.log(celciusToFahrenheit(30));

// Write a function to filter even numbers from an array and return a new array;

// function filterEvenNumbers(numbers) {
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i])
//         }
//     }
//     return evenNumbers;
// }

// let numberArray = [2,2,3,4,5,6,88,33,44];
// let result1 = filterEvenNumbers(numberArray)
// console.log(result1);


let square = (x) => {
    return x * x;
}
console.log(square(4))
