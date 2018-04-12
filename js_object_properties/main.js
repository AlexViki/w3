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
	var bl5 = document.getElementById('bl5');
	var bntAddPr = document.createElement('button');
	var bntCurent = document.createElement('button');
	var btnDel = document.createElement('button');
	var inpAddPr = document.createElement('input');
	var inpAddPrValue = document.createElement('input');
	var inpDelProp = document.createElement('input');
	var span1 = document.createElement('span');
	var span2 = document.createElement('span');
	var span3 = document.createElement('span');
	var p = document.createElement('p');
	var p2 = document.createElement('p');
	var p3 = document.createElement('p');
	var p4 = document.createElement('p');
	var person = {
		fName: 'Alex',
		sName: 'Viki'
	};

	span1.innerHTML = 'Add new name of property:';
	span2.innerHTML = 'Add new value of property:';
	span3.innerHTML = 'Del any of property:';

	p.setAttribute('class', 'style-result');
	p2.setAttribute('class', 'style-result');
	p3.setAttribute('class', 'style-result');
	p4.setAttribute('class', 'style-result');
	p2.setAttribute('id', 'p2');

	inpAddPr.setAttribute('id','inpAddPr');
	inpAddPr.setAttribute('type','text');
	inpAddPr.setAttribute('value','');
    
    inpDelProp.setAttribute('id','inpDelProp');
    inpDelProp.setAttribute('type','text');
    inpDelProp.setAttribute('value','');

	inpAddPrValue.setAttribute('id','inpAddPrValue');
	inpAddPrValue.setAttribute('value','');

	bntAddPr.setAttribute('id','bntAddPr');

	bntAddPr.innerHTML = 'Add';
	bntCurent.innerHTML = 'Show Curent';
	btnDel.innerHTML = 'Del Property';

	bl4.appendChild(bntCurent);

	bl4.appendChild(span1);
	bl4.appendChild(inpAddPr);

	bl4.appendChild(span2);
	bl4.appendChild(inpAddPrValue);
    
    bl4.appendChild(bntAddPr);

    bl5.appendChild(span3);
    bl5.appendChild(inpDelProp);
    bl5.appendChild(btnDel);
    
	bntCurent.onclick = showCurentObj;
	function showCurentObj () {
		var tmp;
		p.innerHTML = 'Curent:' + '<br>';
		p3.innerHTML = 'Curent:' + '<br>';
		for (tmp in person) {
			p.innerHTML += person[tmp] + '<br>';
			p3.innerHTML += person[tmp] + '<br>';
		}
        bl4.appendChild(p);
        bl5.appendChild(p3);
	}

	bntAddPr.onclick = showNewObj;
	function showNewObj() {
        var tmp;
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
    
    // Deleting Properties
    btnDel.onclick = delAnyProperty;
    function delAnyProperty () {
        var tmp;
        var inpDelPropValue = document.getElementById('inpDelProp').value;
        delete person[inpDelPropValue];
        p4.innerHTML = 'Deleted property:' + '<br>';
        for (tmp in person) {
            p4.innerHTML += person[tmp] + '<br>'; 
        }
        bl5.innerHTML(p4);
        
    }
}
