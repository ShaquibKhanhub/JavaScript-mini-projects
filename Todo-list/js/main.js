let addBtn = document.getElementById("add");
let taskContainer = document.getElementById("task");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
loadTasks();


addBtn.addEventListener("click", (e) => {
    let input = document.querySelector("input").value;
    e.preventDefault();
    if (input.length === 0) {
      alert("Please enter a task");
    } else {
      let taskId = Date.now().toString();
      taskContainer.innerHTML += `
          <div class="task" id="${taskId}">
          <span>${input}</span>
          <button class="delete" onclick="deleteTask('${taskId}')">
          <i class="far fa-trash-alt"></i>
          </button>
          </div>`;
      
      tasks.push({ id: taskId, text: input });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });

function loadTasks() {
  taskContainer.innerHTML = "";
  tasks.forEach((task) => {
    taskContainer.innerHTML += `
    <div class="task" id="${task.id}">
      <span>${task.text}</span>
      <button class="delete" onclick="deleteTask('${task.id}')">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>`;
  });
}

function deleteTask(taskId) {
  // Update local storage
  tasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Update the task list on the page
  loadTasks();
}
