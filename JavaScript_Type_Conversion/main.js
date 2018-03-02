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

//The constructor Property
function runConstructorProp() {
    document.getElementById('id_2').innerHTML = '<b>"Alex".constructor = </b>' + "Alex".constructor +
        '<br><b>(3.14).constructor = </b>' + (3.14).constructor +
        '<br><b>false.constructor = </b>' + false.constructor +
        '<br><b>[1,2,3,44,22].constructor = </b>' + [1,2,3,44,22].constructor +
        '<br><b>{name: "Alex", age: 30}.constructor = </b>' + {name: "Alex", age: 30}.constructor +
        '<br><b>new Date().constructor = </b>' + new Date().constructor + 
        '<br><b>function() {}.constructor = </b>' + function() {}.constructor;
};
runConstructorProp();