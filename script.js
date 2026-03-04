// Selectors
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") return;

    // Create the task element (li)
    const li = document.createElement('li');
    li.classList.add('todo-item');
    
    // Set the internal structure of the li
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Append to the list and clear input
    todoList.appendChild(li);
    taskInput.value = "";
}

// Listen for clicks on the Add button
addBtn.addEventListener('click', addTask);

// Listen for the "Enter" key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Functionality to delete or toggle tasks
todoList.addEventListener('click', (e) => {
    // 1. Check if the clicked element is the delete button
    if (e.target.classList.contains('delete-btn')) {
        const itemToRemove = e.target.parentElement;
        itemToRemove.remove();
    }
    
    // 2. Toggle completion (click on the text itself)
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
    }
});