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
	var p5 = document.createElement("p");

	p1.innerHTML = 'Sometimes we need a "blueprint" for creating many objects of the same "type".';
	p2.innerHTML = 'The way to create an "object type", is to use an object constructor function.';
	p3.innerHTML = "In this example, function Person() is an object constructor function.";
	p4.innerHTML = "Objects of the same type are created by calling the constructor function with the new keyword";
	p5.innerHTML = "You cannot add a new method to an object constructor the same way you add a new method to an existing object.<b> Adding methods to an object must be done inside the constructor function</b>";

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
			this.sName = ar2;
			this.age = ar3;
			this.national = "Adding a Property to a Constructor. " +
				"To add a new property to a constructor, must add it to the constructor function, like this one";
			this.yearBorn = function () {
				var text = "(constructor function can also define methods)"
				var y = new Date();
				var res = (y.getFullYear() - this.age);
				return "Yor was born in: <b>" + res + "</b>; " + text;
			}
			this.editlName = function (name) {
				this.sName	= name;
			}
		}
		var newPerson2;
		var newPerson;
		val1 = inp1.value;
		val2 = inp2.value;
		val3 = inp3.value;
		newPerson = new Person(val1, val2, val3);
		newPerson.id = '0547';
		newPerson.showN = f3;

		newPerson2 = new Person("Alex", "Viki", 30);
		newPerson2.height = 172;
		// вставити сюди п
		console.log(newPerson2);
		newPerson2.editlName("Korolov");
		// вставити сюди п
		console.log(newPerson2);

		p.innerHTML += "This is a new person: " + "<br>" +
			"My name is: " + newPerson.fNmae + "<br>" +
			"My age is: " + newPerson.age + "<br>" +
			"ID: " + newPerson.id + "<br>" +
			newPerson.showN() + "<br>" +
			newPerson.national + "<br>" +
			newPerson.yearBorn();

		innerArr = [p,p1,p2,p3,p3,p5];
		f2(bl1, innerArr);
	}
	//Adding a Method to an Object
	function f3() {
		return "Adding a Method to an Object" + "<br>" +
		"I'm a new method. Can show name too: " + this.fNmae;
		//console.log('wwwwwwwwwwwwww');
	};

}
