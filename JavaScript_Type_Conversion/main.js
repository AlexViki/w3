// The typeof Operator
let doc_1 = document.getElementById('id_1');
let radio = document.getElementsByName('name_1');
let radioLength = radio.length;
let textResult = 'Result typeof: ';
console.log(radio);
console.log(radioLength);

function runCheck_1() {
    var arr = ['Alex',
           3.14,
           NaN,
           false,
           [1,2,3,7,1],
           {name:'Jon',age:35},
           new Date(),
           function(){},
           undefined,
           null];
    doc_1.innerHTML = '';
    for (let i = 0; radioLength > i; i++) {
    if (radio[i].checked) { 
        console.log(typeof arr[i]); 
        doc_1.innerHTML = textResult + arr[i] + ' // ' + (typeof arr[i]);
    };
    };
};