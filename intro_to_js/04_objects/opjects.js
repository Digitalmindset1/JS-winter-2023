// Creating object

let person = {
    name : 'John',
    age : '30',
    isMarried : false,
    // address : {
    //     street : '123 Dime street',
    //     city : 'Any city',
    //     state : 'NY',
    //     ZIP : '12345'
    // },
    sayHello : function(){
        // when function property calle, it will execute below code
        console.log('Hello')
    }

};

// Access name property using dot notation
console.log(person.name);
// console.log(person['name']);

// Access function from object person
// person.sayHello();
// let fullname = 'John Doe';

// Access nested object
// console.log(person.address.street);

// Adding new property to object
// console.log(person);
// person.address = {
//     street : '123 Dime street',
//     city : 'ANy city',
//     state : 'NY',
//     zipCode : '12345'
// };

// console.log(person);
// person.dob = '01/01/1990'
// console.log(person.dob)
// person.age = person.age + 1;
// console.log(person.age)

// Delete address from properties
delete person.address;
console.log(person);

// CRUD 

// Loop for object
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
    if(typeof person[key] === 'object') {
        for(nestedKey in person[key]) {
            console.log(`${nestedKey} : ${person[key][nestedKey]}`);
        }
    }
};

// Build Car object
let car = {
    make : 'Honda',
    model : 'Accord',
    color: 'White',
    year : '2023',
    break : function() {
        console.log('break pressed')
    },
    accelerate : function() {
        console.log('accelerate pressed')
    },
    turn : function() {
        console.log('turm is made')
    }

}
console.log(car.make);
car.accelerate();
