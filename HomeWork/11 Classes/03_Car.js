// Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying "The {make} {model} is starting." Create an instance of the Car class and call the start method.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
}

const myCar = new Car('Honda', 'Accord', 2003);

// Call the start method
myCar.start();
