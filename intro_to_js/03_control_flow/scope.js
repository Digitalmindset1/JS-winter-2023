// Validate user input
// Glabal Scope

let userInput = null;
let age = 19;
if(userInput === undefined || userInput === null) {
    let userInput = 'test';
    console.log('Please enter a valid user input')
    console.log(`Age is ${age}`);
} else {
    console.log('Thank you for submitting the form')
}

function tellMeSomething() {
    console.log(userInput);
    console.log(age);
}

tellMeSomething();
