// Write a program based on age and displays a message based on their age using an if-else if statement:
// let age = 24;
// If the age is less than 18, display "You are a minor".
// If the age is between 18 and 65 (inclusive), display "You are an adult".
// If the age is greater than 65, display "You are a senior citizen".


let age = 68;
if (age > 65) {
    console.log('You are a senior citizen')
} else if (age >= 18) {
    console.log('You are an adult')
} else if (age < 18) {
    console.log('You are a minor')
};