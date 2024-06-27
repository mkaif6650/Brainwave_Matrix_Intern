const inputBox = document.querySelector(".input-box");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list-container");

const addTask = function () {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let task = document.createElement("li");
        task.innerText = inputBox.value;
        let span = document.createElement("span");
        span.classList.add("del-btn");
        task.appendChild(span);
        list.appendChild(task);
    }
    inputBox.value = "";
    saveData();
}

btn.addEventListener("click", addTask);
inputBox.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});

list.addEventListener("click", (event) => {
    if (event.target.nodeName == "LI") {
        let listItem = event.target;
        listItem.classList.toggle("checked");
        saveData();
    }

    else if (event.target.nodeName === "SPAN") {
        let listItem = event.target.parentElement;
        listItem.remove();
        saveData();
        // console.log(listItem);
    }
});

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function loadData() {
    list.innerHTML = localStorage.getItem("data");
}

loadData();