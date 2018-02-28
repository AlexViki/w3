// The Break Statement
function funWithBreakre() {
    let doc_1 = document.getElementById('id_1');
    for(let i = 0; i < 10; i++) {
        if(i === 5) { 
            break;
        };
        doc_1.innerHTML = 'The breack was executed when i = ' + i; 
    };
};
funWithBreakre();

//The Continue Statement
function funWithContinue() {
    let doc_2 = document.getElementById('id_2');
    for(let j = 0; j < 10; j++){
        if ( j === 5 ) {
            doc_2.innerHTML += '<b>Skiped: ' + j + '</b><br>';
            continue;
        };
    doc_2.innerHTML += 'Iteration: ' + j + '<br>';
    console.log(j);
    };
};
funWithContinue();

// JavaScript Labels
function funWithLabeles() {
    let doc_3 = document.getElementById('id_3');
    let array_3 = ['red','green','blue','grey'];
    doc_3.innerHTML += array_3 + '<br>';
    array_3: {
        doc_3.innerHTML += 'Value: ' + array_3[0] + '<br>';
        doc_3.innerHTML += 'Value: ' + array_3[1] + '<br>';
        break array_3;
        doc_3.innerHTML += 'Value: ' + array_3[2] + '<br>';
        doc_3.innerHTML += 'Value: ' + array_3[4] + '<br>';
    };
};
funWithLabeles();