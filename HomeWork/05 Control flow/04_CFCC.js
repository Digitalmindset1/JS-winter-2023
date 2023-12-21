/* Write a program based on three numbers and displays the largest number using an if-else statement.
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;
*/

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

if (numberOne >= numberTwo && numberOne >= numberThree) {
    console.log('The largest number is '+ numberOne);
} else if (numberTwo >= numberOne && numberTwo >= numberThree) {
    console.log('The largest number is '+ numberTwo);
} else {
    console.log('The largest number is ' + numberThree);
};
    

