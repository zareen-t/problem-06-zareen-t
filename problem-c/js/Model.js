'use strict';

import initialTasks from './task-data.js';
console.log(initialTasks);

let currentTaskList = initialTasks.map((task, index) => {
    return {
        ...task,
        id: index + 1
    };
});

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