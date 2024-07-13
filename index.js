let listTask = document.getElementById("task-container");
function addTask() {
    const inputBox = document.getElementById("input-box");
    if (inputBox.value === "") {
        alert('You must write a task');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10060";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listTask/addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listTask.innerHTML);
}
listTask.innerHTML = localStorage.getItem("data");