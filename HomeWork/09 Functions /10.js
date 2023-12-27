// Find out the students with grade A 

function filterStudentsByGradeA(students) {
    return students.filter(student => student.grade === "A");
}

const studentsArray = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'Diana', grade: 'C' }
];

const studentsWithGradeA = filterStudentsByGradeA(studentsArray);
console.log('Students with grade "A":', studentsWithGradeA);
