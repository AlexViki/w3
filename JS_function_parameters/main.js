// Parameter Defaults
document.getElementById('btn1').addEventListener("click", checkParametrs);

function checkParametrs() {
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    console.log(inp1 + "; " + inp2 + ";");
    document.getElementById('id_3').setAttribute("class","style-result");
    
    f1(inp1, inp2);
    f1(inp1,);
    function f1(arg1, arg2) {
        document.getElementById('id_3').innerHTML += 
            "This is argument N1: " + arg1 +
            "<br>" + "This is argument N2: " + arg2 + "<br><br>";
    }
    
}

// The Arguments Object
