'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-warning');
    const span = document.createElement('span');
    span.classList.add('material-icons-outlined');
    span.textContent = 'done';
    button.appendChild(span);
    button.addEventListener('click', () => {
        markCompleteCallback(task);
    });
    li.prepend(button);
    li.appendChild(document.createTextNode(` ${task.description}`));
    return li;
}

function renderTaskList(markCompleteCallback) {
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    const tasks = getIncompleteTasks();
    if (tasks.length == 0) {
        const div = document.createElement('div');
        div.textContent = 'None!';
        return div;
    }
    for (const task of tasks) {
        const li = renderSingleTask(task, markCompleteCallback);
        ul.appendChild(li);
    }
    return ul;
}

export { renderTaskList };
