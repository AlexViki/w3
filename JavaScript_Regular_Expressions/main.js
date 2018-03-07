// Using String search()
//runStringSearch();
function runStringSearch() {
    let doc3 = document.getElementById('id_3');
    let inp_3_1 = document.getElementById('input_3_1').value;
    //let inp_3_2 = document.getElementById('input_3_2').value;
    //inp_3_2 += '/' + inp_3_2 + '/i';
    //let objInp_3_2 = new RegExp(inp_3_2);
    //console.log(typeof objInp_3_2);
    doc3.innerHTML = 'Saerch() with a <b>regular</b>: "text". The result: ' + ( inp_3_1.search(/text/i) ) +
        '<br>The search method will also accept a string as search argument. The string argument will be converted to a regular expression.' +
        '<br>Search() with <b>string:</b> "text". The result: ' + ( inp_3_1.search('text') );
};

//Use String replace()
runStringReplace();
function runStringReplace() {
    let doc4 = document.getElementById('id_4').textContent;
    let doc4_1 = document.getElementById('id_4_1');
    doc4_1.innerHTML = 'Replace with a <b>regular</b>: ' + doc4.replace(/alex/i, '<b>Andry</b>') +
        '<br>The replace() method will also accept a string as search argument.' +
        '<br>Replace with a <b>string</b>: ' + doc4.replace('Alex', '<b>Bob<b>');
    //console.log(doc4);
};

//Using test()
//runTestMethod();
function runTestMethod() {
    let doc5 = document.getElementById('id_5');
    let input5 = document.getElementById('input_5').value;
    let arg = /A/;
    doc5.innerHTM = 'Search: ' + arg + ';<br> Result: <b>' + arg.test(input5) + '</b>' +
    "<br>You don't have to put the regular expression in a variable first. The result: <br><b>" + /A/.test(input5) + '</b>' + ' Same)))';
};

//Using exec()
function runExec() {
    let doc6 = document.getElementById('id_6');
    let input_6 = document.getElementById('input_6').value;
    //console.log(input_6);
    doc6.innerHTML = 'Search "A". The result: ' + /A/.exec(input_6) +
        '<br>Searc "B". The result2: ' + /B/.exec(input_6);
};
