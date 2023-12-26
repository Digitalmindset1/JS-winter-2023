// 3 Build Object for  Dogs: A dog can be represented as an object with attributes such as breed, age, and color. It can also have functions like bark, wag tail, and fetch.

let dog =  {
    breed : 'Golden Retriver',
    age : '2',
    color : 'Golden',
    bark : function() {
        console.log('Woof! Woof!');
    },
    wagTail : function() {
        console.log('Tail is wagging happily!');
    },
    fetch : function() {
        console.log('Fetching the ball...');
    }
}


dog.fetch();
dog.wagTail();
dog.bark();

