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
