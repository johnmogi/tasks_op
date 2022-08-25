const body = document.querySelector("body");
const taskCreator = document.getElementById("taskCreator");
const outputBox = document.getElementById("output-box");
const taskBox = document.getElementById("task-box");
const todate = document.getElementById("todate");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskSubmit = document.getElementById("taskSubmit");
let storageTasks = localStorage.getItem("tasks")

const tasksArr = [];
let tasksDOM = [];
let valid;
let taskID = 0;

const today = new Date();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
new Date().getTime();
Date.now();
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today2 = day + "." + month + "." + year;

todate.innerText = today2;
taskDate.innerHTML = today2;
taskDate.valueAsDate = new Date();

function cleanData() {
  localStorage.removeItem("tasks");
}
// cleanData();

// check if ls has items
if (storageTasks){
tasksDOM = JSON.parse(storageTasks);
}
// console.log(tasksDOM);

function build(item) {
  console.log(item[0]);
}
function buildTask(){
  // validation
  let taskData = {
    "task name": taskName.value,
    "task description": taskDesc.value,
    "task date": taskDate.value,
    "task time": taskTime.value,
  };
  tasksArr.push(taskData);
  console.log(tasksArr);
}
// if it does- build tasks using the array
function draw() {
  // taskBox.innerHTML += tasksDOM.length
// buildTasks()
//   for (var i = 0; i < tasksDOM.length; i++) {
//     var key = localStorage.key(i);
//     var item = JSON.parse(localStorage.getItem(key));
//     // if (item == "") {return}
//     build(item);
//   }
}
draw();

taskSubmit.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    buildTask();

    // tasksArr.push(taskData);
    // localStorage.setItem("tasks", JSON.stringify(tasksArr));

    // console.log(tasksArr);
  },
  false
);

// if it doesn't accept new tasks
// build tasks from input form
