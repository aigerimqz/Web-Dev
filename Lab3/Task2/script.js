function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (!task) return;

    let li = document.createElement("li");

    let taskContainer = document.createElement("div");
    taskContainer.className = "checkbox_task";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // checkbox.onchange = () => li.classList.toggle("completed");

    checkbox.onchange = () => {
        alert("Well done!");
        li.classList.toggle("completed");
    }



    
    let taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "text__task"

    let label = document.createElement("label");
    

    if(task.length < 3) {
        label.innerHTML = "Task must be at least 3 characters long";
        // textContent.append("Task must be at least 3 characters long");
        taskContainer.append(label);
        // taskContainer.remove(checkbox, taskText);
        taskContainer.classList.remove("checkbox_task");
        // alert("Wrong!");
    }
    

    // textContent.append(label);

    taskContainer.append(checkbox, taskText);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete__btn";
    // deleteBtn.onclick = () => li.remove();
    deleteBtn.onclick = () => {
        if(confirm("Are you sure you want to delete this task?")) {
            li.remove();
        }
    }

    let trashIcon = document.createElement("img");
    trashIcon.src = "./images/trash.png";
    
    deleteBtn.appendChild(trashIcon);
    checkbox.className, task.className = "checkbox_task";
    li.append(taskContainer, deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    
    
}