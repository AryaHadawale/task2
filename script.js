const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks =
document.getElementById("totalTasks");

const completedTasks =
document.getElementById("completedTasks");

const pendingTasks =
document.getElementById("pendingTasks");

const progressText =
document.getElementById("progressText");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskSpan =
    document.createElement("span");

    taskSpan.textContent = taskText;

    const doneBtn =
    document.createElement("button");

    doneBtn.textContent = "Done";

    doneBtn.classList.add("done-btn");

    doneBtn.addEventListener("click", function(){

        taskSpan.classList.toggle("completed");

        if(taskSpan.classList.contains("completed")){
            doneBtn.textContent = "Undo";
        }
        else{
            doneBtn.textContent = "Done";
        }

        updateStats();
    });

    const deleteBtn =
    document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){

        li.remove();

        updateStats();
    });

    const buttonGroup =
    document.createElement("div");

    buttonGroup.classList.add("task-buttons");

    buttonGroup.appendChild(doneBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttonGroup);

    taskList.appendChild(li);

    taskInput.value = "";

    updateStats();
}

function updateStats(){

    const tasks =
    document.querySelectorAll("#taskList li");

    const completed =
    document.querySelectorAll(".completed");

    totalTasks.textContent =
    tasks.length;

    completedTasks.textContent =
    completed.length;

    pendingTasks.textContent =
    tasks.length - completed.length;

    if(tasks.length > 0 &&
       completed.length === tasks.length){

        progressText.textContent =
        "🎉 All Tasks Completed!";
    }
    else{

        progressText.textContent =
        "Keep Going! 🚀";
    }
}