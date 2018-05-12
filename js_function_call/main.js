// All Functions are Methods
funAndMethod();
function funAndMethod() {
	var id1 = document.getElementById('id_1');
	var person = {
		name: 'Alex',
		age: 30,
		id: 5698,
		show: function() {
			return this.name + ' has ID: ' + this.id ;
		}
	}
	id1.innerHTML = person.show();
}

// The JavaScript call() Method
funCallMethod();
function funCallMethod(arguments) {
	var id2 = document.getElementById('id_2');
	var person = {
		name: 'Test',
		age: 100,
		show: function () {
			return this.name + ', his age is: ' + this.age;
		}
	}
	var person_a = { name: 'Alex', age: 30 }
	var person_b = { name: 'Bob', age: 25 }
	id2.innerHTML = person.show();
	id2.innerHTML += '<br>' + person.show.call(person_a);
	id2.innerHTML += '<br>' + person.show.call(person_b);
}
