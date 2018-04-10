// Accessing JavaScript Properties
window.onload = showObjectProperty();
function showObjectProperty() {
	var bl2 = document.getElementById('bl2');
	var p = document.createElement('p');
	var man = {
		fName: 'Alex',
		sName: 'Viki',
		age: 30
	};
	p.setAttribute('class', 'style-result');
	p.innerHTML = "Thete are two diferent way to show propertys: " + "<br>" +
		"The first: " + man.fName + " is " + man.age + " years old!" + "<br>" +
		"The second: " + man["fName"] + " is " + man["age"] + " years old!" + "<br>" +
		"The result is same";
	bl2.appendChild(p);
}

//
