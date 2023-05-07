import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    const tasksRoot = document.querySelector('#tasks-root');
    tasksRoot.innerHTML = '';
    const taskListElement = renderTaskList(markCompleteCallback);
    tasksRoot.appendChild(taskListElement);
}

document.querySelector('#add-task-button').addEventListener('click', (event) => {
    event.preventDefault();
    const taskInput = document.querySelector('#task-input');
    const taskText = taskInput.value.trim();
    if (taskText.length > 0) {
        model.addTask(taskText);
        taskInput.value = '';
        renderTaskView();
    }
});
