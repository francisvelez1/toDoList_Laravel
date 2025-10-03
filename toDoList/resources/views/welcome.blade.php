<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">


</head>
<body>

        <h1 id="text1">
            TO DO LIST
        </h1>

        <h1 id="containerTitle1">
            Task
        </h1>

        <h1 id="containerTitle2">
            In-Progress
        </h1>

        <h1 id="containerTitle3">
            Finished
        </h1>

    <div id="taskTemplate" class="taskObject" style="display: none;">
        <h1 class="taskTitle"></h1>
        <span class="taskDescription"></span><br>
        <button class="closeTask">Remove</button>
    </div>

    <div id="container1">
        <button id = "AddTaskBtn">
            + Add Task
        </button>


       <div id="taskList1" class="taskList"></div>

    </div>

    <div id="container2">

    <div id="taskList2" class="taskList"></div>

    </div>

    <div id="container3">

     <div id="taskList3" class="taskList"></div>
    </div>

    <div id = "formContainer">
       <button id="closeForm">
           X
       </button>
       <h1 id="headline">
        Input Task
       </h1>

       <label for = "taskInput1" id ="label1">Tasks</label><br>
       <input type="text" id = "taskInput1" ><br><br>
       <label for = "taskInput2" id ="label2">Description</label><br>
       <input type="text" id = "taskInput2"><br><br>
       <label for = "category" id="label3">Choose Status of the Task</label>
       <select id="category">
            <option value="toDo">To Do</option>
            <option value="inProgress">In-Progress</option>
            <option value="finished">Finished</option>
       </select>
       <input type="submit" value="Submit" id="submitButton">

    </div>





    
</body>


<script src="{{ asset('js/main.js') }}"></script>
</html>