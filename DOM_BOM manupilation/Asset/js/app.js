// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field
const form = document.querySelector('#task-form');             //The form at the top
const filter = document.querySelector('#filter');                      //the task filter text field
const taskList = document.querySelector('.collection');          //The ul
const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');
const sortOptions = document.querySelector('.browser-default')
// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
sortOptions.addEventListener('change', taskSort);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault();    //disable form submission

     if (taskInput.value === ''){
        taskInput.style.borderWidth = "5px";
        taskInput.style.borderColor = "red";
        return;     //avoiding else statement
     }
        
     const li = document.createElement('li');
     li.className = 'collection-item';
     li.value = new Date().getSeconds();
     li.appendChild(document.createTextNode(taskInput.value));

     const link = document.createElement('a');
     link.innerHTML = '<i class="fa fa-remove"></i>';
     link.className = 'delete-item secondary-content';

     li.appendChild(link);
     taskList.appendChild(li);
}

// Clear Task Function definition 
function clearAllTasks() {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }
}
// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

// Filter tasks function definition 
function filterTasks(e) {
    const search_term = filter.value;
    const tasks = document.querySelectorAll('.collection-item')
    tasks.forEach(function(elements){
        if(elements.firstChild.textContent.indexOf(search_term)){
            elements.style.display = 'none';
        }
        else{
            elements.style.display = 'block';
        }
    });
}
function taskSort(){
  const registeredTasks = document.querySelectorAll('.collection-item')
  let taskDates = [];
  registeredTasks.forEach(function(elements){
           taskDates.push(elements.value);     
  })
  taskDates.sort();
  let len = taskDates.length;
  
  if(sortOptions.value == "0"){
    for(let i=0; i<len; i++ ){
        registeredTasks.forEach(function(elements){
            if( taskDates[i] == elements.value){
                taskList.appendChild(elements);
            }
   })
    }
  }
  else{
    for(let i=len; i>=0; i-- ){
        registeredTasks.forEach(function(elements){

            if(taskDates[i] == elements.value){

                taskList.appendChild(elements);
            }
   })
    }
  }
}
