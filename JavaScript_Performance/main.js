window.onload = function() {
    var elemScript = document.createElement("script");
    elemScript.src = "main2.js";
    document.getElementById("div1").appendChild(elemScript);
}