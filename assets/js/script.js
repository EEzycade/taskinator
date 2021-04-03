var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createNewTask = function(event) {
    event.preventDefault();
    var tasksListEl = document.createElement("li");
    tasksListEl.className = "task-item";
    tasksListEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(tasksListEl);
}

formEl.addEventListener("submit", createNewTask);