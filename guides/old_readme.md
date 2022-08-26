# tasks_op

tasks project rebuild is done, however I would like to develop the following:

- rebuild the project in react- CRA.
- use redis instead of localstorage - this would involve a backend nodejs.
- package it in docker
- deploy to k8s
- git actions CI Cd

history:
exited to feature barch, you can see the changes there-
troubleshoot_array under guides holds the build process (concept)


rebuild projects - 01 - the tasks app

1. rebuild the project.
   validation:
   prevent past submissions.

2. rebuild project in react
   integret with a real db - nodejs

3. wrapp project into docker
   persistent volume

4. deploy into k8s
5. CI CD using git actions
6. elk it

---

functional approach:

scaffold - bulma
https://bulma.io/documentation/overview/start/

add task submission form:

- task name - string, 1-25 chars.
- task date - date, 6 chars, no option to create past dates.
- task time - time input.
- task details, wysiwyg editor?
- submision and clean all tasks

---

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

3. removing an item from dom and from the array using vanilla js:
   the issue was that at the core level, if one wants to go at such a length a unique identifier needs to be attached to a dynamic created element.
   using jquery w0ould be quite simple but for optimization and also as a challange i chose to do it in vanilla

https://stackoverflow.com/questions/96428/how-do-i-split-a-string-breaking-at-a-particular-character
helped to split the number the remove it from the task array.

which led me to create the following function:

<pre>
# using string literal on object build to create a dynamic unique id:
let close = `button class="delete is-medium" id="closeno-${taskID}" onclick="deleteMe(this)">/button>`;

function deleteMe(obj) { // passing the object into the function
  let objnum = obj.parentNode.id.split('-'); // retrieving the number from the id
  let num = Number(objnum[1]) // assigning and converting the result into a number from string
  num-- // decresing 1 from the result (arrays start at 0)
  tasksArr.splice(num, 1); // removing it from the task array
  obj.parentNode.parentNode.removeChild(obj.parentNode); // deleting it from the dom
}
</pre>

4. setting default date (today) on date object
   while placing empty value and min on date input and setting
   <pre>
   taskDate.valueAsDate = new Date();
   </pre>

   on the date input field does populate it with todays date-
   still the question of how to repopulate it after a clean up without jquery remains....

5. returned from a feature branch o which brought order to the whole physical layer creation.

the flow is:
a task is being created by the user -> validation passed ->
the task array is created and sent to localstorage.
then the draw function iterates build on the task array.

in case of refresh -> check for local storage tasks ->
the taskarray gets populated by the local storage
the rebuild is sent to the taskcreator.

in case of delete task - the tasks is removed from the dom. localstorage and array, a new array is sent to the localstorage

## things to reconsider:

validation could run in a much better efficient way - with iteration.

part 3 of the localstorage delete item could also probably be more efficient to delete one task instead of everything


# housekeeping - considering removing archive branches:
https://stackoverflow.com/questions/1307114/how-can-i-archive-git-branches