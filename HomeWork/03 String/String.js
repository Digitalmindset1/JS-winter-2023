// String Code Challenge:
/* Declare a new string variable with name coder and set value to 'I am a good programmer'
Find out the type of the variable coder
Find out the length of the variable coder
Convert to all uppercase
Convert to all lowercase
Find out if it includes the word ‘good’
Strip out the word  ‘programmer’ from variable
Find out if variables ends with the word `programmer`
Split the variable into two variable at `good` word 
Review all possible action we can do on a string from this doc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// Declare a new string variable coder and set its value
let coder = 'I am a good programmer';

// Find out the type of the variable coder
console.log('Type of coder:', typeof coder);

// Find out the length of the variable coder
console.log('Length of coder:', coder.length);

// Convert to all uppercase
let coderUppercase = coder.toUpperCase();
console.log('Uppercase coder:', coderUppercase);

// Convert to all lowercase
let coderLowercase = coder.toLowerCase();
console.log('Lowercase coder:', coderLowercase);

// Find out if it includes the word ‘good’
let includesGood = coder.includes('good');
console.log('Includes the word "good":', includesGood);

// Strip out the word ‘programmer’ from the variable
let coderStripped = coder.replace('programmer', '');
console.log('Coder without "programmer":', coderStripped);

// Find out if the variable ends with the word 'programmer'
let endsWithProgrammer = coder.endsWith('programmer');
console.log('Ends with "programmer":', endsWithProgrammer);

// Split the variable into two variables at the 'good' word
let [part1, part2] = coder.split('good');
console.log('First part:', part1);
console.log('Second part:', part2);
