// Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.

let users = [
    { id: 1, username: 'alice', email: 'alice@example.com'},
    { id: 13, username: 'mike', email: 'charlie@example.com'},
    { id: 123, username: 'joe', email: 'charlie@example.com'}
]
let user = users.find((user) => {
    return user.email === 'charlie@example.com'
});
console.log(user);