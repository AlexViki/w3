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
window.onload = findHighestValue();
function findHighestValue() {
	var doc4 = document.getElementById('id_4');
	doc4.setAttribute("class", "style-result");
	var maxValue, totalSum;
	// the highest value
	function f1() {
		var i;
		var max = -Infinity;
		var len = arguments.length;
		for (i = 0; i < len; i++) {
			if (arguments[i] > max) {
				max = arguments[i];
				}
		}
		return max;
	}
	// sum all input values
	function f2(n) {
		var i,sum,n;
		var len = arguments.length;
		n = Number(n);
		for (i = 0; i < len; i++) {
			sum += Number(arguments[i]);
		}
		return sum;
		//console.log(arguments[i]);
	}
	maxValue = f1(15,25,4,1,0,-9);
	totalSum = f2(15,25,4,1,0,-9,45);
	doc4.innerHTML = "This way can use a function to find (for instance) the highest value in a list of numbers: " +  maxValue + "<br>" +
	"The sum of numbers are: " + totalSum;
}
