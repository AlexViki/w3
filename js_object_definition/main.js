// Objects are Variables Containing Variables
window.onload = showTestObject();

function showTestObject () {
    var testObj = {
        fName: "Alex",
        sName: "Viki",
        age: 31,
        fullName: function(){
            return "The full name is: " +
                this.fName + " " + this.sName;
        }
    };
    var allName;
    document.getElementById('id_3').innerHTML = "This is my object: " + testObj.fName;
    allName = testObj.fullName();
    return allName;
}


// Object Methods
window.onload = runObjectMethod( showTestObject() )
function runObjectMethod (value) {
    var bl1 = document.getElementById('bl1'),
        p = document.createElement('p'),
        textOut;
    
    textOut = value;
    p.setAttribute('class', 'style-result');
    p.innerHTML = "This is the method from another obleck: " + textOut
    // console.log(textOut);
    bl1.appendChild(p);
}

// Using the JavaScript Keyword new
window.onload = runCreateObject();
function runCreateObject () {
    var doc6 = document.getElementById('id_5');
	var btn = document.getElementById('btnMutable');
    var mainperson = new Object;
    var tmp;
    
    mainperson.fName = 'Bob';
    mainperson.sName = 'Rtyu';
    mainperson.idName = 'main';
    mainperson.age = 30;
    console.log(mainperson);
    
    for (tmp in mainperson) {
        console.log(tmp);
    doc6.innerHTML += mainperson[tmp] + ';<br>';
    }

	btn.onclick = f1;
    function f1() {
        var doc7 = document.getElementById('id_7');
		var inpMutable = document.getElementById('inpMutable').value;
        mainperson.age = inpMutable;
        doc7.innerHTML = '';
		for (tmp in mainperson) {
        	doc7.innerHTML += mainperson[tmp] + ';<br>';
        }
		console.log(inpMutable);
    }
}
