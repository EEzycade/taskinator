var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createNewTask = function() {
    var tasksListEl = document.createElement("li");
    tasksListEl.className = "task-item";
    tasksListEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(tasksListEl);
}

buttonEl.addEventListener("click", createNewTask);