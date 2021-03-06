//Errors Will Happen
//runWillHappen();
document.getElementById('button_1').onclick = function() {
    try {
        addlert("Hi! I'm Alex!!!");
        //c = a + b;
    }
    catch(err) {
        document.getElementById('id_1').innerHTML = err.message;
        //console.log(err.message)
    };
};

//JavaScript try and catch
document.getElementById('button_r1').onclick = function() {
    try { person.age; }
    catch(e) { document.getElementById('id_2').innerHTML = '<br>There is ERROR in <b>try</b>: ' + e.message }
    finally { alert('Runing before "try" and "catch"!!!') }
};
document.getElementById('button_r2').onclick = function() {
    try {
        document.getElementById('id_2').innerHTML = '<br>There is NOT any ERROR in <b>try</b>';
    }
    catch(e) { document.getElementById('id_2').innerHTML = '<br>There is ERROR in <b>try</b>: ' + e.message; }
    finally { alert('Runing before "try" and "catch"!!!') }
};

//Input Validation Example
//runValidExm();
function runValidExm() {
    let inp5 = document.getElementById('input_5').value;
    let doc5 = document.getElementById('id_5');
    //console.log(inp5);
    doc5.innerHTML = '';
    try {
        if (inp5 == '') { throw 'Empty'; }
        if (isNaN(inp5)) { throw 'not a number!!!'; }
        inp5 = Number(inp5);
        if (inp5 <= 10) { throw 'less then 10'; }
        if (inp5 >= 20) { throw 'more the 20'; }
    }
    catch (e) {
        doc5.innerHTML = 'The ERRO is: ' + e + '; Inputed: ' + inp5;
        //alert(e);
    };
};

// HTML Validation
function runHtmlValid() {
    let inp6 = document.getElementById('input_6').value;
    let doc6 = document.getElementById('id_6');
    //console.log(inp6);
    doc6.innerHTML = 'The result: ' + inp6;
};

//The finally Statement
function runFinallyStat() {
    let doc7 = document.getElementById('id_7');
    let in7 = document.getElementById('input_7').value;
    doc7.innerHTML = '';
    try {
        if (in7 == '') throw 'ERROR: Empty value';
        if (isNaN(in7)) throw 'ERROR: not a number!!!'
        in7 = Number(in7);
        if (in7 <= 10) throw 'ERROR: less than 10';
        if (in7 >= 20) throw 'ERROR: more than 20';
    } catch (e) {
        doc7.innerHTML = 'The result: ' + e;
    } finally {
        //console.log(in7);
        doc7.innerHTML += '<br>Block of code to be executed regardless of the try / catch result. Value: ' + in7;
    }
};

//Error Name Values
//Range Error
function runRanfeError() {
    let numA = 67;
    document.getElementById('id_9_2').innerHTML = '67.toPrecision(500)' + '<br>';
    try {
        numA.toPrecision(500);
    } catch (e) {
        document.getElementById('id_9_2').innerHTML += 'The result is: ' + e.name;
    }
};
//Reference Error
function runReferenceError() {
    let numB;
    try {
        numB = q + 1;
    } catch (e) {
        document.getElementById('id_9_3').innerHTML ='The result is: ' + e.name;
    }
};
//Syntax Error
function runSyntaxError() {
    try {
        eval("alert('Hello!!!)");
    } catch (e) {
        document.getElementById('id_9_4').innerHTML = 'The result is: ' + e.name;
    }
};
//Type Error
function runTypeError() {
    let numC = 12;
    try {
        numC.toUpperCase();
    } catch (e) {
        document.getElementById('id_9_5').innerHTML = 'The result is: ' + e.name + '<br>' + e.message;
    }
};
//URI Error
function runURIError() {
    try {
        decodeURI('%%%');
    } catch (e) {
        document.getElementById('id_9_6').innerHTML = 'The result is: ' + e.name + '<br>' + e.message +
        '<br>' + e.stack;
    }
};
