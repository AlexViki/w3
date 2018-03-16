var value = "This is running without strict mode.";
document.getElementById('id_2').innerHTML = value

// Declaring Strict Mode
function runStrictModeFun() {
  'use strict';
  var value2 = "I'm a Function with strict mode. My value was declared";
document.getElementById('id_2').innerHTML += '<br>' + value2 +
        '<br>' + 'Declared <b>inside</b> a function, it has local scope (only the code inside the function is in strict mode)';
// obj = {p: 10, m: 'rrrr'};
// console.log(obj);
};

// Not Allowed in Strict Mode
//function runNotAllowedStrictMode() {
    // Using a variable, without declaring it, is not allowed
    function f1() {
        'use strict'
        numPi = 3.14;
        //console.log(numPi);
    }; 
    //f1();
    // Using an object, without declaring it, is not allowed
    function f2() {
        'use strict';
        obj5 = {name: 'Alex', age: 30};
        console.log(obj5);
    };
    //f2();
    // Deleting a variable (or object) is not allowed.
   /*
   var del_value = 10;
    delete del_value;
    // Deleting a function is not allowed.
    function runDeleteFun(){ console.log('Hi from function!!!'); };
    runDeleteFun();
    delete runDeleteFun;
    // Duplicating a parameter name is not allowed:
    function runDublicat(p1, p1){ console.log('Hi') };

//};




