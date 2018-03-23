// Expecting Loose Comparison
var btn1 = document.getElementById('btn1');
var	btn2 = document.getElementById('btn2');
var bl2 = document.getElementById('bl2');
var p = document.createElement('p');
var num1 = 100;
var num2 = "100";

p.setAttribute("class", "style-result");
//console.log(p);
btn1.onclick = runRegularComp;
btn2.onclick = runStrictComp;

function runRegularComp () {
    var textOut = "In regular comparison, data type does not matter. This if statement returns true.";
    p.innerHTML = textOut + " Result: " + "<b>" + (num1 == num2) + "</b>";
    bl2.appendChild(p);
}
function runStrictComp() {
    "use strict";
    var textOut = "In strict comparison, data type does matter. This if statement returns false.";
    p.innerHTML = textOut + " Result: " + "<b>" + (num1 === num2) + "</b>";
    bl2.appendChild(p);
}

// Misunderstanding Floats
var btn3 = document.getElementById("btn3");
var bl3 = document.getElementById("bl3");
var p3 = document.createElement("p");
var val1 = 0.1;
var val2 = 0.2;
var res, res2;

res = val1 + val2;
res2 = (val1 * 10 + val2 * 10) / 10;
p3.setAttribute("class", "style-result");

btn3.onclick = runCalcFloats;
function runCalcFloats() {
    var textOut = "Result: ";
    var textOut3 = "To solve the problem above, it helps to multiply and divide";
    p3.innerHTML = textOut + val1 + " + " + val2 +
        " = " + res + "<br>" + textOut3 + "<br>" + textOut + res2;
    bl3.appendChild(p3);
}
