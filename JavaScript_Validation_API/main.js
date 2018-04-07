window.onload = runBlockValidApi ();

function runBlockValidApi () {
    var bl1 = document.getElementById('bl1');
    var p = document.createElement('p');
    var inp1 = document.getElementById('inp1');
    var btn1 = document.getElementById('btn1'); 
    
    p.setAttribute("class","style-result");
    p.setAttribute("id","id_1");
    bl1.appendChild(p);
    btn1.onclick = f1;
    
    function f1 () {    
        var tmp;
        if (!inp1.checkValidity()) {
            p.innerHTML = inp1.validationMessage;
        } else {
            p.innerHTML = "Input Valid";
        }
    // console.log(p);
    }
}
