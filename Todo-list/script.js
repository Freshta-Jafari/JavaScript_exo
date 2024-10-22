const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);

const taskCards = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

function addTask (){
    const newTask = taskCards.cloneNode(true);
    const newTextArea = newTask.querySelector('.task');
    newTextArea.value = "New Task";
    tasksContainer.appendChild(newTask);
}

function addTask(){
    const newTask = document.createElement('div');
    newTask.classList.add('todoCard');

    const newTextArea = document.createElement('textarea');
    newTextArea.classList.add('task');
    newTextArea.maxLength = 200;
    newTextArea.cols = 20;
    newTextArea.rows = 3;
    newTextArea.value = "New Task";

    const delBtn = document.createElement('span');
    delBtn.classList.add('delBtn');
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i>';

    newTask.appendChild(newTextArea);
    newTask.appendChild(delBtn);

    tasksContainer.appendChild(newTask);

    delBtn.addEventListener('click', () => {
        tasksContainer.removeChild(newTask);
    });

}