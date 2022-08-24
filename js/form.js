
const body = document.querySelector('body')
const taskCreator = document.getElementById('taskCreator')
const taskSubmit = document.getElementById('taskSubmit')
const taskName = document.getElementById('taskName')

const div1 = '<div class="column is-4">'
const divClose = '</div>'

const taskData = {}
let task_Name = {}
const tasksArr = []

function clean(){
    taskData[task_Name] = ''
}
function validate(){
if (!taskName.value){
    
    document.getElementById("output-box").innerHTML = 
    "name is empty ";
}
else{
    document.getElementById("task-box").innerHTML += 
    div1 + taskName.value + divClose
    task_Name = {'name': taskName.value}
    tasksArr.push(task_Name)

}
}

taskSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    validate();
    console.log(tasksArr);
  }, false);




