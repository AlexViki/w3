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
