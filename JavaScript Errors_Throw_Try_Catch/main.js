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