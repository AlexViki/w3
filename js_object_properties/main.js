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

//JavaScript for...in Loop
window.onload = runLoopFor();
function runLoopFor () {
	var bl3 = document.getElementById('bl3');
	var p = document.createElement('p');
	var person = {
		fName: 'Alex',
		sName: 'Viki',
		age: 30
	};
	var tmp;

	p.setAttribute("class","style-result");

	for (tmp in person) {
		p.innerHTML += person[tmp] + "<br>";;
		bl3.appendChild(p);
	}
}

// Adding New Properties
// window.onload =
AddNewProperty();
function AddNewProperty() {
	var bl4 = document.getElementById('bl4');
	var bntAddPr = document.createElement('button');
	var bntCurent = document.createElement('button');
	var inpAddPr = document.createElement('input');
	var inpAddPrValue = document.createElement('input');
	var span1 = document.createElement('span');
	var span2 = document.createElement('span');
	var p = document.createElement('p');
	var p2 = document.createElement('p');
	var person = {
		fName: 'Alex',
		sName: 'Viki'
	};

	span1.innerHTML = 'Add new name of property:';
	span2.innerHTML = 'Add new value of property:';

	p.setAttribute('class', 'style-result');
	p2.setAttribute('class', 'style-result');
	p2.setAttribute('id', 'p2');

	inpAddPr.setAttribute('id','inpAddPr');
	inpAddPr.setAttribute('type','text');
	inpAddPr.setAttribute('value','');

	inpAddPrValue.setAttribute('id','inpAddPrValue');
	inpAddPrValue.setAttribute('value','');

	bntAddPr.setAttribute('id','bntAddPr');

	bntAddPr.innerHTML = 'Add';
	bntCurent.innerHTML = 'Show Curent';

	bl4.appendChild(bntCurent);

	bl4.appendChild(span1);
	bl4.appendChild(inpAddPr);

	bl4.appendChild(span2);
	bl4.appendChild(inpAddPrValue);

	bl4.appendChild(bntAddPr);

	bntCurent.onclick = showCupentObj;
	function showCupentObj () {
		var tmp;
		p.innerHTML = 'Curent:' + '<br>';
		for (tmp in person) {
			p.innerHTML += person[tmp] + '<br>';
		}
		bl4.appendChild(p);
	}

	bntAddPr.onclick = f1;
	function f1 () {
		var pr = document.getElementById('inpAddPr').value;
		var pr2 = document.getElementById('inpAddPrValue').value;
		console.log(pr + ' - ' + pr2);
		person[pr] = pr2;
		p2.innerHTML = 'New:' + '<br>';
		console.log(person);
		for (tmp in person) {
			p2.innerHTML += person[tmp] + '<br>';
		}
		bl4.appendChild(p2);

	}

}
