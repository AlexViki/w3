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