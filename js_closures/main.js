// Variable Lifetime
runVaribleLIfeTime();
function runVaribleLIfeTime() {
	var bl2 = document.getElementById('bl2');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var text = 'Global variables live as long as your application (your window / your web page) lives.';
	var text2 = 'Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.';
	var arrOfElem = [];
	var x;
	h2.innerHTML = 'Variable Lifetime';
	p.innerHTML = text + '<br>' + text2;
	arrOfElem = [h2, p];

	for (x in arrOfElem) {
		bl2.appendChild(arrOfElem[x]);
	};

};

// A Counter Dilemma
runFunCounterDilemma();
function runFunCounterDilemma() {
	var bl3 = document.getElementById('bl3');
	var h2 = document.createElement('h2');
	var p = document.createElement('p');
	var p_res = document.createElement('p');
	var x;
	var arr = [];
	var t1 = 'The problem is, that any script on the page can change the counter, without calling your varible. If I declare the counter inside the function, nobody will be able to change it without calling';
	var count = 0;

	function f1 () { return count++; };
	function f2() { var count = 0; return count++; };

	p.innerHTML = t1;
	h2.innerHTML = 'A Counter Dilemma';
	p_res.setAttribute('class', 'style-result')
	arr = [h2, p, p_res];

	p_res.innerHTML = 'Use a <b>global</b> variable, and a function to increase the counter.' + '<br>' +
		'First run: ' + f1() + '<br>' +
		'Second run: ' + f1() + '<br>' +
		'Therd run: ' + f1() + '<br><br>' +
		'Use a <b>local</b> variable, and a function to increase the counter.' + '<br>' +
		'First run: ' + f2() + '<br>' +
		'Second run: ' + f2() + '<br>' +
		'Therd run: ' + f2();
	for ( x in arr) {
		bl3.appendChild(arr[x]);
	}
}

// JavaScript Closures
window.onload = runFunClosure();
function runFunClosure() {
	var bl4 = document.getElementById('bl4');
	var p_res = document.createElement('p');
	var p = document.createElement('p');
	//var bt = document.createElement('button');
	var arrOfElem = [];
	var text = 'Here we use self-invoking functions.';
	var x;
	var bt4 = document.getElementById('bt4');

	var add = ( function() {
		var ct = 1;
		return function() { return ct++; }
	} )();

	p.innerHTML = text;
	//bt.innerHTML = 'Run';
	//bt.setAttribute("id", "bt4")
	//arrOfElem = [p, bt, p_res];

	bl4.appendChild(p);
	//bl4.appendChild(bt);

	//bt.addEventListener("click", runBtn());
	bt4.addEventListener = alert('Hi');

	function runBtn() {
		p_res.innerHTML = add() + '; ' + add() + '; ' + add();
		bl4.appendChild(p_res);
	};
};

