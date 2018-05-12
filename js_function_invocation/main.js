//Invoking a JavaScript Function

window.onload = invokJsFun();
function invokJsFun () {
	var elementsForBl1 = [];
	var bl1 = document.getElementById('bl1');
	console.log(bl1);
	var h2 = document.createElement('h2');
	var p = document.createElement('p');

	h2.innerHTML = 'Invoking a JavaScript Function';
	p.innerHTML =
		'The code inside a function is not executed when the function is defined.' + '<br>' +
		'The code inside a function is executed when the function is invoked.' +
		'<br>' +
		'It is common to use the term "call a function" instead of "invoke a function".'  + '<br>' +
		'It is also common to say "call upon a function", "start a function", or "execute a function".';

	elementsForBl1 = [h2, p];
	for (x in elementsForBl1) {
		//console.log(elementsForBl1[x]);
		bl1.appendChild(elementsForBl1[x]);
	}
}

// Invoking a Function as a Function
fun1();
function fun1 () {
	var id2 = document.getElementById('id_2');
	id2.innerHTML = 'It was run like function()';
}
window.fun2();
function fun2 () {
	var id2_1 = document.getElementById('id_2_1');
	id2_1.innerHTML = 'It was run like window.function()' + '<br>' +
		'There is no difference';
}

// The this Keyword
funGlobalThis();
function funGlobalThis () {
	var id4 = document.getElementById('id_4');
	id4.innerHTML = 'A global "this" is: ' + this;
}

var localObject = {
	name: 'Alex',
	age: 30,
	run: function() {
		var id4_1 = document.getElementById('id_4_1');
		id4_1.innerHTML = 'A local "this" is: ' + this;
		return id4_1;
		}
}
localObject.run();
