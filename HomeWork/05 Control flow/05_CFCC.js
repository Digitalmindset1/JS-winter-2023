/* Write a program based on given password and displays a message based on the password using an if-else statement:
let password = 'Test1233';

If the password is less than 8 characters, display "Password too short".
If the password contains both letters and numbers, display "Password accepted".
If the password does not meet either of the above conditions, display "Password rejected".
*/

let password = 'Test1233';

if (password.length < 8) {
    console.log("Password too short");
} else if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
    console.log("Password accepted");
} else {
    console.log("Password rejected");
}
