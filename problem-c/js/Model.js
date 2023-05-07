'use strict';

import initialTasks from './task-data.js';
console.log(initialTasks);

let currentTaskList = initialTasks.map((task, index) => {
    return {
        // use the spread operator
        ...task,
        id: index + 1
    };
});

// function that returns tasks.
function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === "incomplete");
}

function addTask(description) {
    const lastTask = currentTaskList[currentTaskList.length - 1];
    const newId = lastTask ? lastTask.id + 1 : 1;
    const newTask = {
        description: description,
        status: "incomplete",
        id: newId
    };
    currentTaskList = [...currentTaskList, newTask];
}

// marks complete
function markComplete(id) {
    currentTaskList = currentTaskList.map(task => {
        if (task.id === id) {
            return {
                ...task,
                status: "complete"
            };
        }
        return { ...task };
    });
}

export { getIncompleteTasks, addTask, markComplete };