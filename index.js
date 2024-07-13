let listTask = document.getElementById("task-container");
const myBar = document.getElementById("myBar");

function addTask() {
    const inputBox = document.getElementById("input-box");
    if (inputBox.value === "") {
        alert('You must write a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10060;";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
    updateProgressBar();
}

listTask.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        updateProgressBar();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        updateProgressBar();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listTask.innerHTML);
}

function loadData() {
    listTask.innerHTML = localStorage.getItem("data");
    updateProgressBar();
}

function updateProgressBar() {
    const tasks = listTask.getElementsByTagName("li");
    const totalTasks = tasks.length;
    let completedTasks = 0;

    for (let task of tasks) {
        if (task.classList.contains("checked")) {
            completedTasks++;
        }
    }

    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    myBar.style.width = progressPercentage + "%";
    myBar.textContent = progressPercentage === 0 ? "" : progressPercentage.toFixed(0) + "%";
}

// Load data from local storage on page load
loadData();
