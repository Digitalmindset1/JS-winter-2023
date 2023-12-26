// Build Object for Employees: An employee can be represented as an object with attributes such as name, age, salary, and job title. It can also have functions like work, take a break, and attend a meeting.


let employee = {
    firstName : 'Niiaz',
    age : 32,
    salary : 120000,
    jobTitle : 'SDET',
    work : function() {
        console.log(`${employee.firstName} is working.`);
    },
    takeBreak : function() {
        console.log(`${employee.firstName} is taking a break.`);
    },
    attendMeeting : function() {
        console.log(`${employee.firstName} is attending a meeting.`);
    }
}

// Calling status
employee.work();
employee.takeBreak();
employee.attendMeeting();
