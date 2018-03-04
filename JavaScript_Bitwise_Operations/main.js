//JavaScript Bitwise Operators
runBitwise();
function runBitwise() {
    let doc_1 = document.getElementById('id_1');
    doc_1.innerHTML = '& <b>AND</b>	Sets each bit to 1 if both bits are 1. (5 & 1) = ' + (5 & 1) + '<br>' +
        '| <b>OR</b> Sets each bit to 1 if one of two bits is 1. (5 | 1) = ' + (5 | 1) + '<br>' +
        '^ <b>XOR</b> Sets each bit to 1 if only one of two bits is 1. (5 ^1) = ' + (5 ^1) + '<br>' +
        '~ <b>NOT</b> Inverts all the bits. (~5) = ' + (~5) + '<br>' +
        '<<	<b>Zero fill left shift</b> Shifts left by pushing zeros in from the right and let the leftmost bits fall off. ' + 
        '(5 << 1) = ' + (5 << 1) + '<br>' +
        '>>	<b>Signed right shift</b> Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off. ' + '(5 >> 1) = ' + (5 >> 1) + '<br>' +
        '>>> <b>Zero fill right shift</b> Shifts right by pushing zeros in from the left, and let the rightmost bits fall off. (5 >>> 1) = ' +
        (5 >>> 1);
};

//JavaScript Uses 32 bits Bitwise Operands

runUses32();
function runUses32() {
    let textH2 = 'JavaScript Uses 32 bits Bitwise Operands';
    let divId = document.getElementById('div_id_2');
    let h2 = document.createElement('H2');
    h2.setAttribute('class', 'myH2');
    h2.textContent = textH2;
    //divId.appendChild(h2);
    divId.insertBefore(h2, divId.firstChild);
};

//Bitwise AND
runBitwiseAnd();
function runBitwiseAnd() {
    let divId_3 = document.getElementById('div_id_3');
    //console.log(divId_3);
    let p = document.createElement('P');
    p.setAttribute('class','style-result');
    p.setAttribute('id', 'id_result_3');
    //p.textContent = '0 & 0 = ' + (0 & 0) + '; 0 & 1 = ' + (0 & 1);
    divId_3.insertBefore(p, divId_3.lastChild);
    p.innerHTML = '<b>One bit</b><br>' +
        '0 & 0 = ' + (0 & 0) + '<br>' +
        '0 & 1 = ' + (0 & 1) + '<br>' +
        '1 & 0 = ' + (1 & 0) + '<br>' +
        '1 & 1 = ' + (1 & 1) + '<br>' +
        '<b>Four bits</b><br>' +
        '1111 & 0000 = ' + (1111 & 0000) + '<br>' +
        '1111 & 0001 = ' + (1111 & 0001) + '<br>' +
        '1111 & 0010 = ' + (1111 & 0010) + '<br>' +
        '1111 & 0100 = ' + (1111 & 0100);
};

// JavaScript Bitwise AND (&), JavaScript Bitwise OR (|)
// JavaScript Bitwise XOR (^), JavaScript Bitwise NOT (~)
runAllBitwises();
function runAllBitwises() {
    let doc_4 = document.getElementById('id_4');
    let num1 = 5,
        num2 = 1;
    doc_4.innerHTML = 'Bitwise AND: ' + num1 + ' & ' + num2 + ' -> ' + (num1 & num2) +
        '<br>Bitwise OR: ' + num1 + ' | ' + num2 + ' -> ' + (num1 | num2) +
        '<br>Bitwise XOR: ' + num1 + ' ^ ' + num2 + ' -> ' + (num1 ^ num2) +
        '<br>Bitwise NOT: ~' + num1 + ' -> ' + (~num1);
};