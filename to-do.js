const Input = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function display() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>`
    ;
    taskList.appendChild(li);
  });
}

function addTask() {
  const newTask = Input.value;
  if (newTask) {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    Input.value = "";
    display();
  }
}

function editTask(index) {
  const editedTask = prompt("Edit task:", tasks[index]);
  if (editedTask !== null) {
    tasks[index] = editedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    display();
  }
}

function deleteTask(index) {
  if (confirm("Are you sure to delete the task?")) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    display();
  }
}

addBtn.addEventListener("click", addTask);
display();
