//var text1 = "I'm a global from main2.js";

runGlobalVaribles2();
function runGlobalVaribles2() {
	var innerText1 = "I'm a local 2";
	var innerAddText = "I run second!";
	var doc1 = document.getElementById('id_1');
	doc1.innerHTML += '<br>' + innerAddText + '; ' + innerText1 +
		'; ' + text1;
}

