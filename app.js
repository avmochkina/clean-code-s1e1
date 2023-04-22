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

  if (!taskInput.value & taskInput.value === ' ') return;
  createNewTaskElement(taskInput.value);
  taskInput.value = "";
  
}

addButton.addEventListener("click", addTask);

//Edit an existing task.
const editTask = function(e) {
  const listItem = e.target.closest('.task-list__item');
  let labelText = listItem.querySelector('.task__label').innerText;
  const input = listItem.querySelector('.task__input');
  const checkbox = listItem.querySelector('.task__checkbox');
  const isEdited = listItem.querySelector('.task__edit-button').innerText;
  const isCompleted = checkbox.checked;

  if (isEdited === 'Edit') {
    listItem.id = 'edited-task';
    input.value =  labelText;
  } else if(isEdited === 'Save' && isCompleted) {
    console.log(input.value)
    listItem.id = 'completed-task';
    labelText = input.value;
  } else {
    listItem.id = 'uncompleted-task';
    labelText = input.value;
  }

  listItem.innerHTML = `
    <input class="task__checkbox" type="checkbox" ${isCompleted ? 'checked' : ''}>
    <label class="task__label">${labelText}</label>
    <input type="text" value="${labelText}" class="task__input">
    <button class="task__edit-button button">${isEdited === 'Edit' ? 'Save' : 'Edit'}</button>
    <button class="task__delete-button button">
      <img src="./remove.svg" class="delete-button__image" alt="Delete button">
    </button>
  `;

  return listItem;
};

//Delete task.
const deleteTask = function (e) {
  
  const listItem = e.target.closest('.task-list__item');
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
  }, 500);
  
}

//Mark task completed
const taskCompleted = function (e) {
  
  const listItem = e.target.closest('.task-list__item');
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
    listItem.setAttribute('id', 'completed-task');
    const label = listItem.querySelector('.task__label');
    label.classList.add('task__label_completed');
    completedTasksHolder.appendChild(listItem);
  }, 500);

}

const taskUnCompleted = function (e) {
  
  const listItem = e.target.closest('.task-list__item');
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
    listItem.setAttribute('id', 'uncompleted-task');
    const label = listItem.querySelector('.task__label');
    label.classList.remove('task__label_completed');
    uncompleteTaskHolder.appendChild(listItem);
  }, 500);

}

document.addEventListener('click', function(e) {
  
  if (e.target.classList.contains('task__edit-button')) {
    editTask(e);
  } else if( e.target.classList.contains('task__delete-button') || 
              e.target.classList.contains('delete-button__image')) {
    deleteTask(e)
  } else if(e.target.classList.contains('task__checkbox')) {
    if (e.target.checked) {
      taskCompleted(e)
    } else {
      taskUnCompleted(e)
    }
  }

});
