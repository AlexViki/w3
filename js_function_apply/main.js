// The JavaScript apply() Method
funApllyMethod();
function funApllyMethod() {
	var arrayOfItem = [];
	var item;
	var bl1 = document.getElementById('bl1');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var p_result = document.createElement('p');

	var person = {
		showName: function () {
			return 'My mane is ' + this.name +
				', my age is ' + this.age +
				", I'm a " + this.role;
		}
	}
	var personAdmin = {
		name: 'Alex',
		age: 30,
		role: 'developer',
	}

	h2.innerHTML = 'The JavaScript apply() Method';
	p.innerHTML = 'The apply() method is very similar to the call() method.';
	p_result.setAttribute('class', 'style-result');
	p_result.innerHTML = person.showName.apply(personAdmin);
	arrayOfItem = [h2, p, p_result];

	for( item in arrayOfItem) {
		bl1.appendChild(arrayOfItem[item]);
	}
}

// The Difference Between call() and apply()
funDifference();
function funDifference() {
	var id2 = document.getElementById('id_2');
	var ar1 = [18,305,8,10]

	id2.innerHTML = 'This is an arrray: ' + ar1 +
		'<br>' + 'Use apply(), the largest: ' +
		Math.max.apply(null, ar1) +
		'<br>' + 'Another example: ' +
		Math.max.apply(' ', ar1);

}
