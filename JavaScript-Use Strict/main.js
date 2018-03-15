value_1 = "I'm running without strict mode.";
document.getElementById('id_2').innerHTML = value_1;

//Declaring Strict Mode
function runStrictModeFun() {
    "use strict";
    var value_2 = "I'm a Function with strict mode. My value was declared";
    document.getElementById('id_2').innerHTML += '<br>' + value_2 + 
        '<br>' + 'Declared <b>inside</b> a function, it has local scope (only the code inside the function is in strict mode)';
}