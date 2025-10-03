document.addEventListener("DOMContentLoaded",function(){

const form = document.getElementById("formContainer");
const addTask = document.getElementById("AddTaskBtn");
const closeButton = document.getElementById("closeForm");


addTask.addEventListener("click",function(){
    form.style.display = "block";
});

closeButton.addEventListener("click",function(){
    form.style.display = "none";
})


})


const taskNameInput = document.getElementById("taskInput1");
const taskDescriptionInput = document.getElementById("taskInput2");
const statusInput = document.getElementById("category");
const submitTask = document.getElementById("submitButton");


submitButton.addEventListener("click",addTasktoList);

function addTasktoList() {
    const taskName = taskNameInput.value;
    const description = taskDescriptionInput.value;
    const status = statusInput.value;

    const template = document.getElementById("taskTemplate");
    const newTask = template.cloneNode(true);
    newTask.style.display = "block";
    newTask.querySelector(".taskTitle").textContent = taskName;
    newTask.querySelector(".taskDescription").textContent = description;

    const removeBtn = newTask.querySelector(".closeTask");
    removeBtn.addEventListener("click", function () {
        newTask.remove();
    });

   
    newTask.classList.remove("to-do", "in-progress", "finished");
    if (status === "toDo") {
        newTask.classList.add("to-do");
        document.getElementById("taskList1").appendChild(newTask);
    } else if (status === "inProgress") {
        newTask.classList.add("in-progress");
        document.getElementById("taskList2").appendChild(newTask);
    } else if (status === "finished") {
        newTask.classList.add("finished");
        document.getElementById("taskList3").appendChild(newTask);
    }
}