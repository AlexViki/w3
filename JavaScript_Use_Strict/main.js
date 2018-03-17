var value = "This is running without strict mode.";
document.getElementById('id_2').innerHTML = value

// Declaring Strict Mode
function runStrictModeFun() {
  'use strict';
  var value2 = "I'm a Function with strict mode. My value was declared";
document.getElementById('id_2').innerHTML += '<br>' + value2 +
        '<br>' + 'Declared <b>inside</b> a function, it has local scope (only the code inside the function is in strict mode)';
};

// Not Allowed in Strict Mode
// Using a variable, without declaring it, is not allowed
function f1() {
  'use strict'
  numPi = 3.14;
  //console.log(numPi);
};
// Using an object, without declaring it, is not allowed
function f2() {
  'use strict';
  obj5 = {name: 'Alex', age: 30};
  console.log(obj5);
};
// Deleting a variable (or object) is not allowed.
function f3() {
  'use strict';
  var object3 = { name: 'Alex', age: 30 };
  var value3 = 10;
  console.log(object3);
  console.log(value3);
  // if uncomment delete value3 and delete object3, there will be a lot of errors, and any function f1, f2, f3, f4 does not run. We can not see other errors from exemples
  //delete value3;
  //delete object3;
};
// Deleting a function is not allowed.
function f4() {
  'use strict';
  innerF4();
  function innerF4() {
    return alert('Hi!');
  };
  // if uncomment delete value3 and delete object3, there will be a lot of errors, and any function f1, f2, f3, f4 does not run. We can not see other errors from exemples
  // delete innerF4;
};
// Duplicating a parameter name is not allowed:
function f5() {
  'use strict';
  // if uncomment we can not see errors from other function
  //function innerF5(a, a) {}; innerF5();
  console.log('Duplicating a parameter name is not allowed');
};
// Octal numeric literals are not allowed:
function f6() {
  'use strict';
  //var num5 = 010;
  console.log('Octal numeric literals are not allowed');
};
