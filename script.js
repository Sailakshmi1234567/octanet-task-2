function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var li = document.createElement("li");

        // Create the task text
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskText.onclick = function() {
            this.parentNode.classList.toggle("completed");
        };
        li.appendChild(taskText);

        // Create the delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            var li = this.parentNode;
            li.parentNode.removeChild(li);
        };
        li.appendChild(deleteButton);

        // Append the new task to the list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}