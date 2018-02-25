//JavaScript Loops
function runLoop_1() {
    let text1 = 'the same code runs over and over again. Run - ';
    let colors = ['red', 'green', 'blue'];
    for (let i = 0; i < colors.length; i++) {
        //console.log(doc);
        document.getElementById("id_" + (i + 1)).innerHTML = text1 + i + '; Value is : ' + colors[i] + ';<br>';
        document.getElementById('id_'+ (i + 1)).style.color = colors[i];    
    };
};