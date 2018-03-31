document.getElementById('submit').onclick = function(event) {
	//alert(event.type);
	validForm();
}

function validForm () {
	var formValue = document.forms["registerForm"]["inputName"].value;
	console.log(formValue);
	if (formValue == "") {
		alert("Name is empty!!!");
		return false;
	}
}
