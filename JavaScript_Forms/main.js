// JavaScript Form Validation
document.getElementById('submit').onclick = function(event) {
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

// JavaScript Can Validate Numeric Input
var bl2 = document.getElementById("bl2");
var btn = document.getElementById("btn2");
var p = document.createElement("p");

p.setAttribute("class", "style-resylt");
btn.onclick = valinInputFild;

function valinInputFild () {
	var text;
	var valueInput = document.getElementById('inp2').value;
	console.log(valueInput);
	if (isNaN(valueInput) || valueInput < 1 || valueInput > 10) {
			text = "ERROR!!! Not valid!";
		} else {
			text = "success";
		}
	p.innerHTML = text;
	bl2.appendChild(p);
}

// 
