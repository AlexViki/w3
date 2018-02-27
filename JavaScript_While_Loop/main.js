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
    let j = 1;
    let i = 0;
    doc_2.innerHTML = '';
    ////////////
    do {
        if (inputDoc_2[i].checked) {
            //console.log(inputDoc_2[i].value);
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
    while (j <= valueOfInput);
};

//Comparing For and While
function runForAndWhile() {
    let colors = ['red','blue','green','yellow'];
    let i = 0;
    let doc_3 = document.getElementById('id_3');
    let text_3 = 'Run loop <b>for</b>: ';
    let text_3a = ' The value: ';
    doc_3.innerHTML = colors + '<br>';
    for (;colors[i];) {
        doc_3.innerHTML += text_3 + ' - ' + i + text_3a + colors[i] + '<br>';
        i++;
    };
    
    let doc_4 = document.getElementById('id_4');
    let text_4 = 'Run loop <b>while</b>: ';
    let j = 0;
    doc_4.innerHTML = colors + '<br>';
    while(colors[j]) {
        doc_4.innerHTML += text_4 + ' - ' + j + text_3a + colors[j] + '<br>';
        //console.log(j);
        j++;
    };
};
