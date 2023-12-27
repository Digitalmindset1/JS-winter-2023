// Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an email to the person's email address. Create an instance of the Person class and call the sendEmail method with a message

class Person {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
sendEmail(message) {
    console.log(`Sending email to ${this.name} , ${this.email}. Message: ${message}`);
}
}

const person1 = new Person('Niiaz', 'us3475100152@gmail.com');

person1.sendEmail('Merry Christmas and Happy new year!');

