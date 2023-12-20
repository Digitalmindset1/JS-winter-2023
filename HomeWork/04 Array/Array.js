// Array Code Challenge

/* Create an array of student names (Add at least 5 names)
Find the length of an array
Demonstrate the usage of array manipulation on students array by showing example of pop, push, shift, unshift, splice functions
Find out if array includes the value ‘John’
Find index of student ‘Kate’
Reverse your array and print last Index value
Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )
*/

// Create an array of student names
let students = ["Niiaz", "Hakim", "Joe", "Kate", "Roman"];

// Find the length of the array
console.log("Length of the array:", students.length);

// Demonstrate array manipulation
console.log("Original Array:", students);

// Pop: Remove the last element
let removedStudent = students.pop();
console.log("After pop:", students, "- Removed:", removedStudent);

// Push: Add an element to the end
students.push("Frank");
console.log("After push:", students);

// Shift: Remove the first element
let shiftedStudent = students.shift();
console.log("After shift:", students, "- Removed:", shiftedStudent);

// Unshift: Add an element to the beginning
students.unshift("Grace");
console.log("After unshift:", students);

// Splice: Remove and/or insert elements at a specific index
students.splice(2, 1, "Henry", "Ivy");
console.log("After splice:", students);

// Check if the array includes the value 'John'
console.log("Does the array include 'John'?", students.includes('John'));

// Find the index of 'Kate'
let indexOfKate = students.indexOf('Kate');
console.log("Index of 'Kate':", indexOfKate);

// Reverse the array and print the last index value
students.reverse();
console.log("Reversed Array:", students);
console.log("Last Index Value:", students[students.length - 1]);

// Check if the first index value equals the last index value
let isFirstEqualLast = students[0] === students[students.length - 1];
console.log("Is the first index equal to the last index?", isFirstEqualLast);
