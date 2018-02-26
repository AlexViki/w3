//The While Loop
function runWileLoop_1() {
    let inputDoc_1 = document.getElementById('id_input_1').value;
    let doc_1 = document.getElementById('id_1');
    let text_1 = 'Run: ';
    let i = 0;
    let j = inputDoc_1 - 1;
    doc_1.innerHTML = '';
    while (inputDoc_1 > i) {
        //console.log(i);
        //i++;
        doc_1.innerHTML += text_1 + i + '  ###  ' + text_1 + j + '<br>';
        i++;
        j--;
    };
};

//The Do/While Loop
function runDoWhileLoop_1() {
    let doc_2 = document.getElementById('id_2');
    let inputDoc_2 = document.getElementsByName('name');
    let valueOfInput;
    let text_2 = 'Run "do/while": ';
    let j = 0;
    let i = 0;
    doc_2.innerHTML = '';
    ////////////
    do {
        if (inputDoc_2[i].checked) {
            console.log(inputDoc_2[i].value);
            valueOfInput = inputDoc_2[i].value;
        };
        i++;
    } while (i < inputDoc_2.length);
    /*
    for (; i < inputDoc_2.length; i++) {
        
        if (inputDoc_2[i].checked) {
            console.log(inputDoc_2[i].value);
            valueOfInput = inputDoc_2[i].value;
        };
        
    };*/
    do {
        doc_2.innerHTML += text_2 + j + '<br>';
        j++;
    }
    while (j < valueOfInput);
};