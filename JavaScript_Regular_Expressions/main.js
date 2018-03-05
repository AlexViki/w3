// Using String search()
//runStringSearch();
function runStringSearch() {
    let doc3 = document.getElementById('id_3');
    let inp_3_1 = document.getElementById('input_3_1').value;
    //let inp_3_2 = document.getElementById('input_3_2').value;
    //inp_3_2 += '/' + inp_3_2 + '/i';
    //let objInp_3_2 = new RegExp(inp_3_2);
    //console.log(typeof objInp_3_2);
    doc3.innerHTML = 'Saerching: "text". <br>The result: ' + ( inp_3_1.search(/text/i) );
};