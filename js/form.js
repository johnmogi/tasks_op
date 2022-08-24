
const body = document.querySelector('body')
const taskCreator = document.getElementById('taskCreator')
const outputBox = document.getElementById('output-box')
const taskBox = document.getElementById('task-box')
const todate = document.getElementById('todate')
const taskName = document.getElementById('taskName')
const taskDesc = document.getElementById('taskDesc')
const taskDate = document.getElementById('taskDate')
const taskSubmit = document.getElementById('taskSubmit')

const today = new Date();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
new Date().getTime()
Date.now()
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today2 = day + "." + month + "." + year;
todate.innerText = today2

const close = '<button class="delete is-medium"></button>'
const divClose = '</div>'
const br ='<br/>'

const tasksArr = []
const tasksDOM = []
let valid = false;
let taskID = 0

function clean(){
}
function validate(){
    if (!taskName.value){
        outputBox.innerHTML = "the Task name is empty ";
        return valid = false;
    }
    
    if (!taskDesc.value){
        outputBox.innerHTML = "the Task Description is empty ";
        return valid = false;
    }

    if (!taskDate.value){
        outputBox.innerHTML = "the Task Date is empty ";
        return valid = false;
    }
    else{
    taskID++ 
    let div1 = `<div class="column card is-4" id="taskno-${taskID}">` 
    taskBox.innerHTML += 
    div1 + close + br + taskName.value + br + taskDesc.value + br + taskDate.value + divClose

    return valid = true;
}
}

taskSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    validate();
    if (!valid) {return outputBox.innerHTML += br + "Some of the fields are empty"; }
    let taskData = {
        'task name': taskName.value,
        'task description': taskDesc.value,
        'task date': taskDate.value

    }
    tasksArr.push(taskData)
    console.log(tasksArr);

  }, false);

