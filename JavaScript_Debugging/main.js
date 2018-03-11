//The debugger Keyword
function runDebuger() {
    let text4 = 'With the debugger turned on, this code will stop executing before it executes the third line.';
    document.getElementById('id_4').innerHTML = text4;

    let x = 10 * 5;
    debugger;
    //alert(x);
    document.getElementById('id_4').innerHTML += '<br>Result: ' + x;
};
