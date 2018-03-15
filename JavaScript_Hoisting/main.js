//JavaScript Declarations are Hoisted
function runHosting_1() {
    x = "I'm a varible string!";
    document.getElementById('id_1').innerHTML = 'The varible was assigned and then declared: <b>' + x + '</b>';
    var x;

    var y;
    y = "I'm a varible string 2!!!";
    document.getElementById('id_1').innerHTML += '<br>The varible was declared and then assigned: <b>' + y + '</b>' +
    '<br>To understand this, we have to understand the term <b>"hoisting"</b>.';
}

//JavaScript Initializations are Not Hoisted
function runIniNotHosting() {
    var num1 = 10,
        num2 = 20;
document.getElementById('id_2').innerHTML = 'The varibles were declareted. Num1 = ' + num1 + '; Num2: ' + num2 + '; Num3: ' + num3;
var num3 = 30;
    
var numA = 'A';
var numB;
document.getElementById('id_2').innerHTML += '<br>Example2: ' + numA + '; ' + numB;
numB = 'B';
}

//run2();
var run2 = function() {
    console.log('Runing');
}
run2();