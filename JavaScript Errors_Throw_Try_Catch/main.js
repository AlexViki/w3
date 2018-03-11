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
runValidExm();
function runValidExm() {
    let inp5 = document.getElementById('input_5').value;
    let doc5 = document.getElementById('id_5');
    //console.log(inp5);
    doc5.innerHTML = '';
    try {
        if (inp5 == '') { throw 'Empty'; }
        if (isNaN(inp5)) { throw 'not a number!!!'; }
        inp5 = Number(inp5);
        if (inp5 < 9) { throw 'less then 10'; }
        if (inp5 > 19) { throw 'more the 20'; }
    }
    catch (e) {
        doc5.innerHTML = 'The ERRO is: ' + e + '; Inputed: ' + inp5;
        alert(e);
    };
};
