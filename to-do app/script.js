let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let button = document.querySelector("button");

button.addEventListener("click", function () {

    // Get the text from input
    let task = inputBox.value;

    // Don't add empty task
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new li
    let li = document.createElement("li");

    // Put task inside li
    li.innerText = task;

    // Add li to ul
    listContainer.appendChild(li);

    // Clear input
    inputBox.value = "";

    // Create delete button
    let span = document.createElement("span");
    span.innerText = "×";

    // Add delete button inside li
    li.appendChild(span);

    // Click task → mark completed
    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    // Click × → delete task
    span.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

});