
// for (let i = 1; i <= 10; i++) {
//     // Execute this block of code if contidition is true
// console.log(i);
// }

/* Multiplication table
Create a program that generates a multiplication table for a given number.
Here's an example of what the output might look like 


// */

// let number = 5;
// for (let i =1; i <= 10; i++) {
//     console.log(`${number}  x ${i} = ${number*i}`)
// };

/* Counting Vowels
Create a program that counts the number of tvowels in a given string.
Tha program should run based on a declared string variable,
and then display the number of towels in the string.

*/

let userSentence = 'Niiaz Murtazin';
let vowels = 'aeiouAEIOU';
let count = 0;

for(let i = 0; i < userSentence.length; i++) {
    if(vowels.includes(userSentence[i])) {
        console.log(userSentence[i])
        count++;
    }
}
console.log(`Number of vowels in ${userSentence}: ${count}`);

