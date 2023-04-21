const taskInput = document.querySelector(".task__input_new-task");
const addButton = document.querySelector(".task__add-button");
const uncompleteTaskHolder = document.querySelector(".task-list_uncompleted");
const completedTasksHolder = document.querySelector(".task-list_completed");

//New task list item
const createNewTaskElement = function (taskString) {
  
  const listItemHTML = 
  `<li class="task-list__item task" id="uncompleted-task">
    <input class="task__checkbox" type="checkbox">
    <label class="task__label">${taskString}</label>
    <input type="text" class="task__input">
    <button class="task__edit-button button">Edit</button>
    <button class="task__delete-button button">
    <img src="./remove.svg" class="delete-button__image" alt="Delete button">
    </button>
  </li>`;
  
  uncompleteTaskHolder.insertAdjacentHTML('beforeend', listItemHTML);

}

const addTask = function () {

  if (!taskInput.value) return;
  createNewTaskElement(taskInput.value);
  taskInput.value = "";
  
}

addButton.addEventListener("click", addTask);

//Edit an existing task.
const editTask = function(e) {

  const listItem = e.target.closest('.task-list__item');
  const labelText = listItem.querySelector('.task__label').innerText;
  listItem.id = 'edited-task';
  listItem.innerHTML = 
    `<input class="task__checkbox" type="checkbox">
    <label class="task__label">${labelText}</label>
    <input type="text" value="${labelText}" class="task__input">
    <button class="task__edit-button button">Save</button>
    <button class="task__delete-button button">
      <img src="./remove.svg" class="delete-button__image" alt="Delete button">
    </button>`;
  return listItem;

};


//Delete task.
const deleteTask = function (e) {
  
  const listItem = e.target.closest('.task-list__item');
  //Remove the parent list item from the ul.
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
  }, 500);
  
}
document.addEventListener('click', function(e) {
  
  // Check if the event target is an edit button
  if (e.target.classList.contains('task__edit-button')) {
    editTask(e);
  } else if( e.target.classList.contains('task__delete-button') || e.target.classList.contains('delete-button__image')) {
    deleteTask(e)
  }
});

/*
//Mark task completed
const taskCompleted = function () {
  console.log("Complete Task...");

  //Append the task list item to the #completed-tasks
  const listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

}


const taskIncomplete = function () {
  console.log("Incomplete Task...");
  //Mark task as incomplete.
  //When the checkbox is unchecked
  //Append the task list item to the #incompleteTasks.
  const listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}



const ajaxRequest = function () {
  console.log("AJAX Request");
}

//The glue to hold it all together.

//Set the click handler to the addTask function.
addButton.onclick = addTask;
*/

/*
addButton.addEventListener("click", ajaxRequest);

const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select ListItems children
  const checkBox = taskListItem.querySelector("input[type=checkbox]");
  const editButton = taskListItem.querySelector("button.edit");
  const deleteButton = taskListItem.querySelector("button.delete");


  //Bind editTask to edit button.
  editButton.onclick = editTask;
  //Bind deleteTask to delete button.
  deleteButton.onclick = deleteTask;
  //Bind taskCompleted to checkBoxEventHandler.
  checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (const i = 0; i < incompleteTaskHolder.children.length; i++) {

  //bind events to list items chldren(tasksCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (const i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list items chldren(tasksIncompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.
*/