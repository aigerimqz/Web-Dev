function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (!task) return;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => li.classList.toggle("completed");

    let taskLine = document.createElement("span");
    taskLine.textContent = task;

    let deleteBtn = document.createElement("button");
    // 
    deleteBtn.className = "delete__btn";
    deleteBtn.onclick = () => li.remove();

    li.append(checkbox, task);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    
    
}