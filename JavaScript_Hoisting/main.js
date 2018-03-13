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
