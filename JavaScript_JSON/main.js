document.getElementById('button_convert').onclick = convertJsonTextToJsObject;

function convertJsonTextToJsObject () {
	var text = '{ "emlpoyees" : [ { "firstName":"Alex", "secondName":"Vik" }, { "firstName":"Bob", "secondName":"Hyri" } ] }';
	var p = document.createElement("p");
	var bl1 = document.getElementById('bl1');
	p.setAttribute("class", "style-result");
	p.setAttribute("id","id_1");
	bl1.appendChild(p);
	var doc1 = document.getElementById('id_1');
	var obj = JSON.parse(text);
	doc1.innerHTML = "Original value: " + text +
		"<br><br>" + "Result: " +
		"<br>" + obj.emlpoyees[0].firstName +
		"<br>" + obj.emlpoyees[1].firstName;
}
