
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


so refractoring the mechanism for the following flow:

the program checks for localstorage array namesd 'tasks'

if there are items in that array it builds the tasks from that array.

regardless a user can build new tasks - add them to the DOM, to the array and the localstorage.

preferably both functions of the build stage should be the same.

