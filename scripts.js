// Task Array
var tasks = [];

//Variable Statuses
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Constructor function created
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task) {
    
    var listEL = document.getElementById('active-list');
    var taskEL = document.createElement('li');
    var textEL = document.createTextNode(task.name);

    
    taskEL.setAttribute('id', task.id);
    taskEL.appendChild(textEL);
    listEL.appendChild(taskEL);
}


function addTask (event) {
    var inputEL = document.getElementById('input-task');
    if (inputEL.value != '') {
        var id = 'item-' + tasks.length;
        var task = new Task(id, inputEL.value, taskStatus.active);
        tasks.push(task);
        addTaskElement(task);
        inputEL.value = '';
    }
}

function completeTask (event) {
    var taskEL = event.target;
    var id = taskEL.id;

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    taskEL.remove();
    document.getElementById('completed-list').appendChild(taskEL);
}

function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

function init () {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButton;
}

init();