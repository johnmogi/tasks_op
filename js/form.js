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
const title4 = '<p class="title is-4">';
const title4cl = "</p>";

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
// const close = '<button class="delete is-medium"></button>'
const divClose = "</div></div>";
const br = "<br/>";

const tasksArr = [];
const tasksDOM = [];
let valid;
let taskID = 0;

function clean() {}
function deleteMe(obj) {
  let objnum = obj.parentNode.id.split("-");
  let num = Number(objnum[1]);
  num--;
  tasksArr.splice(num, 1);
  obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
}
function validate() {
  if (!taskName.value) {
    outputBox.innerHTML = "the Task name is empty ";
    outputBox.style.color = "#dc3545";
    taskName.style.borderColor = "#dc3545";
    return !valid;
  }

  if (!taskDesc.value) {
    outputBox.innerHTML = "the Task Description is empty ";
    outputBox.style.color = "#dc3545";
    taskDesc.style.borderColor = "#dc3545";
    return !valid;
  }

  if (!taskDate.value) {
    outputBox.innerHTML = "the Task Date is empty ";
    outputBox.style.color = "#dc3545";
    taskDate.style.borderColor = "#dc3545";
    return !valid;
  } else {
    taskID++;
    let div1 = `<div class="column card is-4" id="taskno-${taskID}"><div class="card-content">`;
    let close = `<button class="delete is-medium" id="closeno-${taskID}" onclick="deleteMe(this)"></button>`;
    outputBox.innerHTML = `task: ${taskName.value} created on ${time}`;
    outputBox.style.color = "#000";
    taskDate.style.borderColor = "initial";
    taskDesc.style.borderColor = "initial";
    taskName.style.borderColor = "initial";
    taskBox.innerHTML +=
      div1 +
      close +
      br +
      title4 +
      taskName.value +
      title4cl +
      br +
      taskDesc.value +
      br +
      taskTime.value +
      br +
      taskDate.value +
      divClose;
    return (valid = true);
  }
}
console.log(close);

taskSubmit.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    validate();
    console.log(valid);
    if (!valid) {
      return (outputBox.innerHTML += br + "Some of the fields are empty");
    }

    let taskData = {
      "task name": taskName.value,
      "task description": taskDesc.value,
      "task date": taskDate.value,
      "task time": taskTime.value,
    };
    tasksArr.push(taskData);
    console.log(tasksArr);
  },
  false
);

// document.querySelector(`#closeno-`)
