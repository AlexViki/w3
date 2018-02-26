//The While Loop
function runWileLoop_1() {
    let inputDoc_1 = document.getElementById('id_input_1').value;
    let doc_1 = document.getElementById('id_1');
    let text_1 = 'Run - ';
    let i = 0;
    doc_1.innerHTML = '';
    while (inputDoc_1 > i) {
        //console.log(i);
        //i++;
        doc_1.innerHTML += text_1 + i + ';<br>';
        i++;
    };
};