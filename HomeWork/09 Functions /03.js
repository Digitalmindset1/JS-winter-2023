// Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.

function filterAdults(people) {
    return people.filter(person => person.age > 18);
}

const peopleArray = [
    { name: 'Niiaz', age: 32, gender: 'male' },
    { name: 'Zarina', age: 30, gender: 'female' },
    { name: 'John ', age: 14, gender: 'male' },
    { name: 'Alice', age: 18, gender: 'female' }
];

const adults = filterAdults(peopleArray);
console.log('Adults:', adults);
