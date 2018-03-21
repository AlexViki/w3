var text1 = "I'm a global from main.js";
runGlobalVaribles();
function runGlobalVaribles() {
	var innerText1 = "I'm a local";
	var innerAddText = "I run firs!";
	var doc1 = document.getElementById('id_1');
	doc1.innerHTML += innerAddText + '; ' + innerText1 +
		'; ' + text1;
}