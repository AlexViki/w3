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
