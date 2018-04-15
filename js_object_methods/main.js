// Accessing Object Methods
window.onload = accessObjMethod();
function accessObjMethod() {
	var doc2 = document.getElementById('id_2');
	var user = {
		fName: "Alex",
		sName: "Viki",
		age: 30,
		fullName: function () {
			return 'My name is: ' + this.fName + ' ' + this.sName;
		}
	};

	doc2.setAttribute('class','style-result');
	doc2.innerHTML = user.fullName();
	doc2.innerHTML += '<br>' + 'If you access the fullName property, without (), it will return the function definition: ' + '<br>' +
		user.fullName;
}

//Adding a Method to an Object
window.onload = addMethod();
function addMethod() {
	var doc4 = document.getElementById('id_4');
	var btnAddMeth = document.getElementById('btnAddMeth');
	var inp1 = document.getElementById('inp1');
	var user = {
		fName: "Alex",
		sName: "Viki",
		age: 30
		};
	var tmp;
	doc4.setAttribute('class','style-result');
	btnAddMeth.onclick = function () {
		user.inp1 = function() {
			return "I'm " + this.fName + "; I'v a new method.";
		};
		console.log(user.ee);
		for (tmp in user) {
			doc4.innerHTML += user[tmp] + "<br>";
		}
		doc4.innerHTML += user.inp1();
	}


}
