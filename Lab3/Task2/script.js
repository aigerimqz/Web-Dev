function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (!task) return;

    let li = document.createElement("li");

    let taskContainer = document.createElement("div");
    taskContainer.className = "checkbox_task";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => li.classList.toggle("completed");

    
    let taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "text__task"

    taskContainer.append(checkbox, taskText);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    let trashIcon = document.createElement("img");
    trashIcon.src = "./images/trash.png";
    
    deleteBtn.appendChild(trashIcon);
    checkbox.className, task.className = "checkbox_task";
    li.append(taskContainer, deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    
    
}