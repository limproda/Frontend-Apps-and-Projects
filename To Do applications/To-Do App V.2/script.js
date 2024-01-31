// Constants
const input = document.getElementById("input");
const taskContainer = document.querySelector(".task-container");
const btn = document.getElementById("btn");

// Function used to create new tastk
function addTask() {
    // If the user don't write anything, show an error
    if (input.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");         

        // Create a span for task text
        let taskText = document.createElement("span");
        taskText.innerHTML = input.value;
        taskText.classList.add("task-text");

        // Create a delete icon
        let icon = document.createElement("i");         
        icon.classList.add("icon", "fa-solid", "fa-x");

        // Append task text and delete icon to the lists
        li.appendChild(taskText);
        li.appendChild(icon);
        
        // Append list element to the task container
        li.classList.add("task");
        taskContainer.appendChild(li);
    }
    input.value = ""; // Empty the input
    saveData()
}

// Events Listener
taskContainer.addEventListener("click", function (e) {
    const target = e.target;
    // Click on the span element
    if (target.tagName === "SPAN") {
        target.classList.toggle("checked");
        saveData()

    // Click on the icon element
    } else if (target.tagName === "I") {
        target.parentElement.remove();
        saveData()
    }
}, false);

btn.addEventListener("click", function(){
    addTask();
    saveData()
}, false);

document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        addTask();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();