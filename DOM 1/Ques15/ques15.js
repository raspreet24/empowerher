let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // create li
    let li = document.createElement("li");
    li.textContent = taskText;

    // complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.marginLeft = "10px";

    completeBtn.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
});