let person ={
    name : 'John',
    age : 32,
    gender : 'Male'
}

for (let key in person) {
    console.log(key + ": " + person[key]);
}