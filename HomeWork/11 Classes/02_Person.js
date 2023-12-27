// Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying "Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Niiaz', 32);

person1.greet();
