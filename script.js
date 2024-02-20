// //Document is the DOM can be accessed in the console with document.window.
// // Tree is from the top, html, body, p etc.

// //Problem: User interaction does not provide the correct results.
// //Solution: Add interactivity so the user can manage daily tasks.
// //Break things down into smaller steps and take each step at a time.


// // Event handling, user interaction is what starts the code execution.

// // var taskInput=document.getElementById("new-task");//Add a new task.
// // var addButton=document.getElementsByTagName("button")[0];//first button
// // var incompleteTaskHolder=document.getElementById("incompleteTasks");//ul of #incompleteTasks
// // var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


// // //New task list item
// // var createNewTaskElement=function(taskString){

// //     var listItem=document.createElement("li");

// //     //input (checkbox)
// //     var checkBox=document.createElement("input");//checkbx
// //     //label
// //     var label=document.createElement("label");//label
// //     //input (text)
// //     var editInput=document.createElement("input");//text
// //     //button.edit
// //     var editButton=document.createElement("button");//edit button

// //     //button.delete
// //     var deleteButton=document.createElement("button");//delete button
// //     var deleteButtonImg=document.createElement("img");//delete button image

// //     label.innerText=taskString;
// //     label.className='task';

// //     //Each elements, needs appending
// //     checkBox.type="checkbox";
// //     editInput.type="text";
// //     editInput.className="task";

// //     editButton.innerText="Edit"; //innerText encodes special characters, HTML does not.
// //     editButton.className="edit";

// //     deleteButton.className="delete";
// //     deleteButtonImg.src='./remove.svg';
// //     deleteButton.appendChild(deleteButtonImg);


// //     //and appending.
// //     listItem.appendChild(checkBox);
// //     listItem.appendChild(label);
// //     listItem.appendChild(editInput);
// //     listItem.appendChild(editButton);
// //     listItem.appendChild(deleteButton);
// //     return listItem;
// // }



// // var addTask=function(){
// //     console.log("Add Task...");
// //     //Create a new list item with the text from the #new-task:
// //     if (!taskInput.value) return;
// //     var listItem=createNewTaskElement(taskInput.value);

// //     //Append listItem to incompleteTaskHolder
// //     incompleteTaskHolder.appendChild(listItem);
// //     bindTaskEvents(listItem, taskCompleted);

// //     taskInput.value="";

// // }

// // //Edit an existing task.

// // var editTask=function(){
// //     console.log("Edit Task...");
// //     console.log("Change 'edit' to 'save'");


// //     var listItem=this.parentNode;

// //     var editInput=listItem.querySelector('input[type=text]');
// //     var label=listItem.querySelector("label");
// //     var editBtn=listItem.querySelector(".edit");
// //     var containsClass=listItem.classList.contains("editMode");
// //     //If class of the parent is .editmode
// //     if(containsClass){

// //         //switch to .editmode
// //         //label becomes the inputs value.
// //         label.innerText=editInput.value;
// //         editBtn.innerText="Edit";
// //     }else{
// //         editInput.value=label.innerText;
// //         editBtn.innerText="Save";
// //     }

// //     //toggle .editmode on the parent.
// //     listItem.classList.toggle("editMode");
// // };


// // //Delete task.
// // var deleteTask=function(){
// //     console.log("Delete Task...");

// //     var listItem=this.parentNode;
// //     var ul=listItem.parentNode;
// //     //Remove the parent list item from the ul.
// //     ul.removeChild(listItem);

// // }


// // //Mark task completed
// // var taskCompleted=function(){
// //     console.log("Complete Task...");

// //     //Append the task list item to the #completed-tasks
// //     var listItem=this.parentNode;
// //     completedTasksHolder.appendChild(listItem);
// //     bindTaskEvents(listItem, taskIncomplete);

// // }


// // var taskIncomplete=function(){
// //     console.log("Incomplete Task...");
// // //Mark task as incomplete.
// //     //When the checkbox is unchecked
// //     //Append the task list item to the #incompleteTasks.
// //     var listItem=this.parentNode;
// //     incompleteTaskHolder.appendChild(listItem);
// //     bindTaskEvents(listItem,taskCompleted);
// // }



// // var ajaxRequest=function(){
// //     console.log("AJAX Request");
// // }

// // //The glue to hold it all together.


// // //Set the click handler to the addTask function.
// // addButton.onclick=addTask;
// // addButton.addEventListener("click",addTask);
// // addButton.addEventListener("click",ajaxRequest);


// // var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
// //     console.log("bind list item events");
// // //select ListItems children
// //     var checkBox=taskListItem.querySelector("input[type=checkbox]");
// //     var editButton=taskListItem.querySelector("button.edit");
// //     var deleteButton=taskListItem.querySelector("button.delete");


// //     //Bind editTask to edit button.
// //     editButton.onclick=editTask;
// //     //Bind deleteTask to delete button.
// //     deleteButton.onclick=deleteTask;
// //     //Bind taskCompleted to checkBoxEventHandler.
// //     checkBox.onchange=checkBoxEventHandler;
// // }

// // //cycle over incompleteTaskHolder ul list items
// // //for each list item
// // for (var i=0; i<incompleteTaskHolder.children.length;i++){

// //     //bind events to list items chldren(tasksCompleted)
// //     bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
// // }




// // //cycle over completedTasksHolder ul list items
// // for (var i=0; i<completedTasksHolder.children.length;i++){
// //     //bind events to list items chldren(tasksIncompleted)
// //     bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
// // }




// // Issues with usability don't get seen until they are in front of a human tester.

// //prevent creation of empty tasks.

// //Change edit to save when you are in edit mode.







// document.addEventListener("DOMContentLoaded", function() {
//     const addButton = document.querySelector("button");
//     const todoList = document.getElementById("incompleteTasks");
//     const completedList = document.getElementById("completed-tasks");
    
//     // Function to create a new task item
//     function createTaskElement(taskText) {
//         const listItem = document.createElement("li");
//         const checkbox = document.createElement("input");
//         const label = document.createElement("label");
//         const editInput = document.createElement("input");
//         const editButton = document.createElement("button");
//         const deleteButton = document.createElement("button");
        
//         checkbox.type = "checkbox";
//         label.textContent = taskText;
//         editInput.type = "text";
//         editButton.textContent = "Edit";
//         deleteButton.innerHTML = '<img src="./remove.svg">';
        
//         listItem.appendChild(checkbox);
//         listItem.appendChild(label);
//         listItem.appendChild(editInput);
//         listItem.appendChild(editButton);
//         listItem.appendChild(deleteButton);
        
//         return listItem;
//     }
    
//     // Function to add a new task
//     function addTask() {
//         const taskInput = document.getElementById("new-task");
//         const taskText = taskInput.value.trim();
//         if (taskText === "") {
//             alert("Please enter a task!");
//             return;
//         }
//         const listItem = createTaskElement(taskText);
//         todoList.appendChild(listItem);
//         bindTaskEvents(listItem, completeTask);
//         taskInput.value = "";
//     }
    
//     // Function to edit an existing task
//     function editTask() {
//         const listItem = this.parentNode;
//         const editInput = listItem.querySelector("input[type=text]");
//         const label = listItem.querySelector("label");
//         const editButton = listItem.querySelector("button.edit");
//         const containsClass = listItem.classList.contains("editMode");
        
//         if (containsClass) {
//             label.textContent = editInput.value;
//             editButton.textContent = "Edit";
//         } else {
//             editInput.value = label.textContent;
//             editButton.textContent = "Save";
//         }
        
//         listItem.classList.toggle("editMode");
//     }
    
//     // Function to delete a task
//     function deleteTask() {
//         const listItem = this.parentNode;
//         const ul = listItem.parentNode;
//         ul.removeChild(listItem);
//     }
    
//     // Function to complete a task
//     function completeTask() {
//         const listItem = this.parentNode;
//         completedList.appendChild(listItem);
//         bindTaskEvents(listItem, incompleteTask);
//     }
    
//     // Function to mark a task as incomplete
//     function incompleteTask() {
//         const listItem = this.parentNode;
//         todoList.appendChild(listItem);
//         bindTaskEvents(listItem, completeTask);
//     }
    
//     // Function to bind event handlers to the task list items
//     function bindTaskEvents(listItem, checkboxEventHandler) {
//         const checkbox = listItem.querySelector("input[type=checkbox]");
//         const editButton = listItem.querySelector("button.edit");
//         const deleteButton = listItem.querySelector("button.delete");
        
//         checkbox.onchange = checkboxEventHandler;
//         editButton.onclick = editTask;
//         deleteButton.onclick = deleteTask;
//     }
    
//     // Bind event handler for adding a new task
//     addButton.onclick = addTask;
    
//     // Bind event handlers for existing tasks
//     for (let i = 0; i < todoList.children.length; i++) {
//         bindTaskEvents(todoList.children[i], completeTask);
//     }
//     for (let i = 0; i < completedList.children.length; i++) {
//         bindTaskEvents(completedList.children[i], incompleteTask);
//     }
// });


//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

let taskInput=document.getElementById("new_task");
let addButton=document.getElementsByTagName("button")[0];
let incompleteTaskHolder=document.getElementById("incomplete_Tasks");
let completedTasksHolder=document.getElementById("completed_tasks");


//New task list item
let createNewTaskElement=function(taskString){

    let listItem=document.createElement("li");

    let checkBox=document.createElement("input");
    let label=document.createElement("label");
    let editInput=document.createElement("input");
    let editButton=document.createElement("button");

    let deleteButton=document.createElement("button");
    let deleteButtonImg=document.createElement("img");

    label.innerText=taskString;
    label.className="task";

    label.classList.add("task")


    //Each elements, needs appending
    checkBox.type="checkbox";
    editInput.type="text";
    editInput.className = "task";

    editButton.innerText="Edit"; 
    editButton.className="edit";

    deleteButton.className="delete";
    deleteButtonImg.src="./remove.svg";
    deleteButton.appendChild(deleteButtonImg);

    
    listItem.classList.add("list_element")
    checkBox.classList.add("input")
    editInput.classList.add("input")
    editButton.classList.add("button")
    deleteButton.classList.add("button")
    deleteButtonImg.classList.add("img")


    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}



let addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new_task:
    if (!taskInput.value) return;
    let listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

let editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");

    let listItem=this.parentNode;

    let editInput=listItem.querySelector("input[type=text]");
    let label=listItem.querySelector("label");
    let editBtn=listItem.querySelector(".edit");
    let containsClass=listItem.classList.contains("edit_Mode");
    //If class of the parent is .editmode
    if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
        label.innerText=editInput.value;
        editBtn.innerText="Edit";
    }else{
        editInput.value=label.innerText;
        editBtn.innerText="Save";
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("edit_Mode");
};


//Delete task.
let deleteTask=function(){
    console.log("Delete Task...");

    let listItem=this.parentNode;
    let ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

}


//Mark task completed
let taskCompleted=function(){
    console.log("Complete Task...");

    //Append the task list item to the #completed_tasks
    let listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


let taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    let listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



let ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    let checkBox=taskListItem.querySelector("input[type=checkbox]");
    let editButton=taskListItem.querySelector("button.edit");
    let deleteButton=taskListItem.querySelector("button.delete");


    editButton.onclick=editTask;
    deleteButton.onclick=deleteTask;
    checkBox.onchange=checkBoxEventHandler;
}

 //bind events to list items chldren(tasksCompleted)
for (let i=0; i<incompleteTaskHolder.children.length;i++){
   
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}



  //bind events to list items chldren(tasksIncompleted)
for (let i=0; i<completedTasksHolder.children.length;i++){
  
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.