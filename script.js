// Select elements from the DOM
const taskInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


// Function to add a task
function addTask() {

    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") return;

    // Create new list item
    const li = document.createElement("li");

    li.textContent = taskText;

    // Add it to the task list
    todoList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}


// Add task when button is clicked
addBtn.addEventListener("click", addTask);


// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        addTask();
    }

});