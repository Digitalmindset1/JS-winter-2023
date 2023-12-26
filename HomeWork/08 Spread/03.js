// Write a function that takes in an object and a key-value pair to add to the object, and returns a new object with the key-value pair added.

const originalObject = {
    name : 'John',
    age : 30
}

const newKey = 'city';
const newValue = 'New York';

function addObjectKeyValuePair(obj, key,value) {
    return {
        ...obj,
        [key] : value
    };
}

const newObject = addObjectKeyValuePair(originalObject, newKey, newValue);
console.log(newObject);
