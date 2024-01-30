const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list")
function addTask() {
    if (inputBox.value === '') {
        alert("Empty task, please write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";

}
