# tasks_op

rebuild projects - 01 - the tasks app

1. rebuild the project.
validation:
prevent past submissions.


2. rebuild project in react
integret with a real db - nodejs

2. wrapp project into docker
persistent volume

3. deploy into k8s
4. CI CD using git actions
4. elk it



------------------
functional approach:

scaffold - bulma
https://bulma.io/documentation/overview/start/

add task submission form:
- task name - string, 1-25 chars.
- task date - date, 6 chars, no option to create past dates.
- task time - time input.
- task details, wysiwyg editor?
- submision and clean all tasks

------------------

troubleshoot:
things that took me some effort...

1. fix flexible width:
https://stackoverflow.com/questions/48303637/bulma-why-all-columns-are-on-one-line
solution:
columns is-multiline
column is 4

2. populate the object in an array with new data each time...
https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
<pre>
const taskData = {}
let task_Name = {}
const tasksArr = []

    document.getElementById("task-box").innerHTML += 
    div1 + taskName.value + divClose
    task_Name = {'name': taskName.value}
    tasksArr.push(task_Name)
</pre>




