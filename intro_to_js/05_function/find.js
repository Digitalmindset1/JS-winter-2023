
// let numbers = [5,8,12,15,20];
// let numberToFind = numbers.find((number) => {
//     return number > 10
// });
// console.log(numberToFind);


let users = [
    { id: 1, username: 'alice', email: 'alice@example.com'},
]
let user = users.find((user) => {
    return user.username === 'Charlie'
});
console.log(user);

