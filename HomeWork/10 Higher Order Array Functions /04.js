// Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.

const tasksArray = [
    { name: 'Task 1', complete: true },
    { name: 'Task 2', complete: false },
    { name: 'Task 3', complete: true },
    { name: 'Task 4', complete: true }
];


function areAllTasksComplete(tasks) {
    let allComplete = true;

    tasks.forEach(task => {
        if (!task.complete) {
            allComplete = false;
        }
    });

    return allComplete;
}


const allTasksComplete = areAllTasksComplete(tasksArray);
console.log('Are all tasks complete?', allTasksComplete);
