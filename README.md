# tasks_op

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

5. sorting tasks by date? redrawing the output table?
   if we take a look at troubleshoot 3 and it's naive and a bit clumsy solution and ataking into consideration
   a feature request for sorting and repopulating data while considering code efficency one comes to think of the draw method:
   this feature has not been implimented as of yet, but you can see it on my older repo:

<pre>
function deleteTask(id) {
	const delBut = document.getElementById('note' + id);
	delBut.remove();
	returnedArray.splice(id);
	localStorage.removeItem(id);
	returnedArray.length = 0;
	redraw();
	//   deleteCard();
}
// what is redraw() ? here:

function redraw() {
	if (localStorage.length < 1) {
		return;
	}
	if (returnedArray.length > 1) {
		return;
	}
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var item = JSON.parse(localStorage.getItem(key));
		// if (item == "") {return}

		returnedArray.push(item);
	}
	returnedArray.reverse();
	generate();
}
// what is generate() ? here:
function generate(){
stage.innerHTML = ""

for (let i = 0; i < returnedArray.length; i++) {

const div = document.createElement("div")
stage.append(div)
// div.className= ("card text-white bg-warning mb-3 col-4")
div.className= ("card mb-3 col-4")
const butX = document.createElement("button")
butX.innerHTML = 'i class="glyphicon glyphicon-remove">/i>'
butX.addEventListener("click",deleteTask)
butX.className= ("close")
butX.id = ("but" + returnedArray[i].id)
div.append(butX)

const div2 = document.createElement("div")
div.append(div2)
div2.className= ("card-header")

div2.append(returnedArray[i].taskName)

const div3 = document.createElement("div")
div.append(div3)
div3.className= ("card-body")
div3.append(returnedArray[i].taskDetail)

div.append(returnedArray[i].dueDate)

    }
}
// a bit weird, trust me :
function draw(){
    validate()
    timeValid()
    buildTask()
    generate()
}
function redraw(){
    if (localStorage.length < 1){ return }
    if (returnedArray.length > 1){ return }
    for(var i=0;ilocalStorage.length; i++) {
        var key = localStorage.key( i );
        var item = JSON.parse( localStorage.getItem( key ) );
        // if (item == "") {return}
        returnedArray.push(item)
      }
      generate()
}
</pre>

as you can see this method is also a bit clumsy and incoherent...
there are however 2 main advantages:
the whole board doesn't get recalculated and built step by step but at one!
(actaully not demonstrated) - but the idea is simple - build the block and only then apply the change on innerhtml.
there is less need for locating an item and manipulating (in the manner of which problem 3 was solved)

and obviously the biggest advantage is to return a sorted array to the dom- but actualy this can also be done with the same manner as of now (:

5. rebuild draw:

since manual adding the tasks does populate the array but getting it from local storage doesnt' exit to a feature branch for rebuild
