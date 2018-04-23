// Function Declarations
window.onload = runFunDeclaration();
function runFunDeclaration() {
	var doc1 = document.getElementById('id_1');
	var doc2 = document.getElementById('id_2');
	var varibleOfFun = function () {
		return "This function is actually an anonymous function (a function without a name).";
	};
	doc1.setAttribute("class", "style-result");
	doc2.setAttribute("class", "style-result");

	doc1.innerHTML = f1();
	doc2.innerHTML = varibleOfFun();

	function f1() {
		return "I'm a function!!!";
	}
}

// Self-Invoking Functions
var btn5 = document.getElementById('btn5');
btn5.addEventListener('click',function () {
	var doc5 = document.getElementById('id_5');
	doc5.setAttribute("class", "style-result");
	doc5.innerHTML = "I was run by the click";
	(function () {
		doc5.innerHTML += "<br><br>" + "I was invoked myself " +
			"<br>" + "This function is actually an anonymous self-invoking function (function without name).";
	})();
});

// Functions Can Be Used as Values
window.onload = useFunValue();
function useFunValue() {
	var doc6 = document.getElementById('id_6');
	var tOut = "JavaScript functions can be used as values";

	function f1(doc, text) {
		this.d = doc;
		this.t = text;
		d.setAttribute("class", "style-result");
		return d.innerHTML = t;
	}
	var f_1 = f1(doc6, tOut);
	f_1;
}

// Functions are Objects
window.onload = runFunctionOfObject();
function runFunctionOfObject() {
	var doc7 = document.getElementById('id_7');
	var lengthOfFun,
		txtOfFunction;

	doc7.setAttribute("class", "style-result")

	function f1(x, y) {
		return arguments.length;
	}

	lengthOfFun = f1(2, 2);
	txtOfFunction = f1.toString();
	doc7.innerHTML = "The length of function is: " + lengthOfFun +
		"<br>" + "The toString() method returns the function as a string: " +
		"<br><code>" + txtOfFunction + "</code>";
}
