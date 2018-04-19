// Object constructor
var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", user);

function Person(first, last, age) {
	this.fName = first;
	this.lName = last;
	this.age = age;
}

function user () {
	var user1 = new Person("Alex", "Viki", 30);
	var user2 = new Person("Body", "Tyre", 20);

	var p = document.getElementById('id_1');
	p.setAttribute("class", "style-result");

	f1(user1);
	f1(user2);
	function f1(arg) {
		var tmp;
		for (tmp in arg) {
			p.innerHTML += arg[tmp] + "<br>";
		}
	}

}

// Using the prototype Property
window.onload = addNewProperty();
function addNewProperty() {
	var doc4 = document.getElementById('id_4');
	var doc5 = document.getElementById('id_5');
	var doc6 = document.getElementById('id_6');
	var us1, us2, us3;

	function Person (first, second, age, id) {
		this.fName = first;
		this.sName = second;
		this.age = age;
		this.id = id;
	}

	Person.prototype.nationality = "Ukraine";
	Person.prototype.introFull = function () {
		return "My full name is: " + this.fName + " " + this.sName;
	};

	us1 = new Person("Den", "Lurty", 40, 14587);
	us2 = new Person("Neil", "Awert", 18, 56733);
	us3 = new Person("Werav", "Koyr", 35, 58913);

	doc4.innerHTML = "This is person N1: " + us1.fName +
		"<br>" + "He is: " + us1.nationality;
	doc5.innerHTML = "This is a person N2: " + us2.fName +
		"<br>" + "He is: " + us2.nationality + " too!"
	doc6.innerHTML = us3.introFull();
	console.log(us3);
	console.log(Person);
}
