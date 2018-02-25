//JavaScript Loops
function runLoop_1() {
    let text1 = 'the same code runs over and over again. Run - ';
    let colors = ['red', 'green', 'blue'];
    for (let i = 0; i < colors.length; i++) {
        //console.log(doc);
        document.getElementById('idRunLoop_' + (i + 1)).innerHTML = text1 + i + '; Value is : ' + colors[i] + ';<br>';
        document.getElementById('idRunLoop_'+ (i + 1)).style.color = colors[i];    
    };
};

//The For Loop
function runLoopFor_1() {
    let inputValue_1 = document.getElementById('inputId_1').value;
    let doc_2 = document.getElementById('id_2');
    doc_2.innerHTML = '';
    if (inputValue_1 <= 100 && inputValue_1 >= -100) {
        for (let i = 0; i <= inputValue_1; i++) {
            doc_2.innerHTML += i + '; ';
        };
    } else { 
        doc_2.innerHTML += 'ERROR! Type more -100 or less 100';
        };
};
function runLoopFor_2() {
    let inputValue_2 = document.getElementById('inputId_2').value;
    let doc_3 = document.getElementById('id_3');
    let i = 0;
    doc_3.innerHTML = '';
    if (inputValue_2 <= 100 && inputValue_2 >= -100) {
        for (; i <= inputValue_2; i++) {
            doc_3.innerHTML += i + '; ';
        };
    } else { 
        doc_3.innerHTML += 'ERROR! Type more -100 or less 100';
        };
};

//The For/In Loop
function forInLoop() {
    let car = {
        model: 'BMW',
        year: 2010,
        type: 'sedan',
        engine: '1.8l'
    };
    let doc_4 = document.getElementById('id_4');
    let tmp;
    for (tmp in car) {
        doc_4.innerHTML += car[tmp] + ';<br>';
    };
};
forInLoop();