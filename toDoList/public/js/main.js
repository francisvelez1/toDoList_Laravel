const addTaskBtn = document.getElementById("AddTaskBtn");
const formContainer = document.getElementById("formContainer");
const closeFormBtn = document.getElementById("closeForm");
const submitBtn = document.getElementById("submitButton");
const headline = document.getElementById("headline");

// Show form for adding
addTaskBtn.addEventListener("click", () => {
    document.getElementById("taskId").value = ""; // Clear ID
    document.getElementById("taskInput1").value = "";
    document.getElementById("taskInput2").value = "";
    document.getElementById("category").value = "toDo";
    headline.textContent = "Add New Task";
    formContainer.style.display = "block";
});

// Close form
closeFormBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
});

// Handle add/update submit
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const title = document.getElementById("taskInput1").value;
    const description = document.getElementById("taskInput2").value;
    const status = document.getElementById("category").value;

    const method = id ? "PUT" : "POST";
    const url = id ? `/tasks/${id}` : "/tasks";

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        body: JSON.stringify({
            title,
            description,
            status
        })
    });

    if (response.ok) {
        alert(id ? "Task updated successfully!" : "Task added successfully!");
        formContainer.style.display = "none";
        location.reload();
    } else {
        alert("Something went wrong!");
    }
});

// Handle edit button click
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("editTask")) {
        const id = e.target.getAttribute("data-id");
        const taskDiv = e.target.closest(".taskObject");

        const title = taskDiv.querySelector(".taskTitle").textContent;
        const description = taskDiv.querySelector(".taskDescription").textContent;
        let status = "toDo";

        if (taskDiv.closest("#taskList2")) status = "inProgress";
        if (taskDiv.closest("#taskList3")) status = "finished";

        // Populate form
        document.getElementById("taskId").value = id;
        document.getElementById("taskInput1").value = title;
        document.getElementById("taskInput2").value = description;
        document.getElementById("category").value = status;
        headline.textContent = "Edit Task";

        // Show form
        formContainer.style.display = "block";
    }
});


// Handle deleting tasks
document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("closeTask")) {
        const id = e.target.getAttribute("data-id");

        if (confirm("Are you sure you want to delete this task?")) {
            const response = await fetch(`/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                }
            });

            if (response.ok) {
                alert("Task deleted successfully!");
                location.reload();
            } else {
                alert("Failed to delete task.");
            }
        }
    }
});

