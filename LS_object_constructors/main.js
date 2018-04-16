// JS Object Constructors
// window.onload =
createElemInBl_1();
function createElemInBl_1() {
	var inp1 = document.createElement("input");
	var inp2 = document.createElement("input");
	var inp3 = document.createElement("input");
	var btn1 = document.createElement("button");
	var p = document.createElement("p");
	var bl1 = document.getElementById('bl1');

	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var span3 = document.createElement("span");

	var addTagsToPage = [];
	var tmp;
	var val1, val2, val3;

	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var p3 = document.createElement("p");
	var p4 = document.createElement("p");

	p1.innerHTML = 'Sometimes we need a "blueprint" for creating many objects of the same "type".';
	p2.innerHTML = 'The way to create an "object type", is to use an object constructor function.';
	p3.innerHTML = "In this example, function Person() is an object constructor function.";
	p4.innerHTML = "Objects of the same type are created by calling the constructor function with the new keyword";

	addTagsToPage = [btn1, span1, inp1, span2, inp2, span3, inp3];

	p.setAttribute("class","style-result");

	inp1.setAttribute("type","text");
	inp2.setAttribute("type","text");
	inp3.setAttribute("type","number");

	inp1.setAttribute("value","");
	inp2.setAttribute("value","");
	inp3.setAttribute("value","");

	span1.innerHTML = "Type first name:"
	span2.innerHTML = "Type Secon name:"
	span3.innerHTML = "Type age:"

	btn1.innerHTML = "Create";

	f2(bl1, addTagsToPage);
	function f2(arg1, arg2) {
		var tmp;
		for (tmp in arg2) {
			arg1.appendChild(arg2[tmp]);
		}
	}

	btn1.addEventListener("click", f1);

	function f1 () {
		var innerArr = [];
		function Person (ar1, ar2, ar3) {
			this.fNmae = ar1;
			this.sNmae = ar2;
			this.age = ar3;
		}
		var newPerson2;
		var newPerson;
		val1 = inp1.value;
		val2 = inp2.value;
		val3 = inp3.value;
		newPerson = new Person(val1, val2, val3);
		newPerson.id = '47';
		newPerson2 = new Person("Alex", "Viki", 30);
		newPerson2.height = 172;
		p.innerHTML += "This is a new person: " + "<br>" +
			"My name is: " + newPerson.fNmae + "<br>" +
			"My age is: " + newPerson.age + "<br>" +
			newPerson.id + "<br>";
		console.log(newPerson2);
		innerArr = [p,p1,p2,p3,p3];
		f2(bl1, innerArr);
	}
}
