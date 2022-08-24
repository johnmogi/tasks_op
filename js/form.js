
const body = document.querySelector('body')
const taskCreator = document.getElementById('taskCreator')
const taskSubmit = document.getElementById('taskSubmit')
const taskName = document.getElementById('taskName')
const taskDesc = document.getElementById('taskDesc')


const div1 = '<div class="column is-4">'
const divClose = '</div>'
const br ='<br/>'

const tasksArr = []
const tasksDOM = []
let valid = false;

function clean(){
}
function validate(){
    if (!taskName.value){
        document.getElementById("output-box").innerHTML = "the Task name is empty ";
        return valid = false;
    }
    else if (!taskDesc.value){
        document.getElementById("output-box").innerHTML = "the Task Description is empty ";
        return valid = false;
    }
    else{
    document.getElementById("task-box").innerHTML += 
    div1 + taskName.value + br +  taskDesc.value + divClose

    return valid = true;
}
}

taskSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    validate();
    if (!valid) {return document.getElementById("output-box").innerHTML += br + "Some of the fields are empty"; }
    let taskData = {
        'task name': taskName.value,
        'task description': taskDesc.value
    }
    tasksArr.push(taskData)
    console.log(tasksArr);

  }, false);

