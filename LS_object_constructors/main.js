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
		val1 = inp1.value;
		val2 = inp2.value;
		val3 = inp3.value;
		function CreateConstr (ar1, ar2, ar3) {
			this.fNmae = ar1;
			this.sNmae = ar2;
			this.age = ar3;
		}
		var newPerson = new CreateConstr(val1, val2, val3);
		p.innerHTML = "This is a new person: " + "<br>" +
			"My name is: " + newPerson.fNmae + "<br>" +
			"My age is: " + newPerson.age;
		bl1.appendChild(p);
	}
}
