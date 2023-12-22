
let numbers = [1,2,3,4,5];
// for (let value of numbers) {
//     console.log(value)
// }

// for (let i =0 ; i <= numbers.length; i++) {
//     console.log(numbers[i])
// };

let sum = 0;
for (let value of numbers) {
    sum += value;
}
console.log(`Sum of ${numbers}: ${sum}`);

let tempString = 'Hello,world';
for (let char of tempString) {
    console.log(char)
};

