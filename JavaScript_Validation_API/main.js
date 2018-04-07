// JavaScript Validation API
window.onload = runBlockValidApi();
function runBlockValidApi() {
    var bl1 = document.getElementById('bl1');
    var p = document.createElement('p');
    var inp1 = document.getElementById('inp1');
    var btn1 = document.getElementById('btn1'); 
    
    bl1.appendChild(p);
    btn1.onclick = f1;
    
    function f1() {    
        p.setAttribute("class","style-result");
        p.setAttribute("id","id_1");
        if (!inp1.checkValidity()) {
            p.innerHTML = inp1.validationMessage;
        } else {
            p.innerHTML = "Input Valid";
        }
    // console.log(p);
    }
}

// Validity Properties
// The rangeOverflow Property
window.onunload = runValidProperty();

function runValidProperty () {
    // новые елементы которые добавляем на страницу
    var bl2 = document.getElementById('bl2');
    var input_max = document.createElement('input');
    var input_min = document.createElement('input');
    var btn_max = document.createElement('button');
    var btn_min = document.createElement('button');
    var p = document.createElement('p');
    var p_max = document.createElement('p');
    var p_min = document.createElement('p');
    var text_max = "If the number in an input field is greater than 100 (the input's max attribute), display a message:";
    var text_min = "If the number in an input field is less than 100 (the input's min attribute), display a message:";
    var arr_max = [p_max, input_max, btn_max];
    var arr_min = [p_min, input_min, btn_min ];
    
    input_max.setAttribute('id', 'inp_max');
    input_max.setAttribute('type', 'number');
    input_max.setAttribute('max', '100');
    input_min.setAttribute('id', 'inp_min');
    input_min.setAttribute('type', 'number');
    input_min.setAttribute('min', '100');
    
    btn_max.setAttribute('id','button_max');
    btn_min.setAttribute('id','button_min');
    btn_max.innerHTML = 'Max';
    btn_min.innerHTML = 'Min';
    
    p_max.innerHTML = text_max;
    p_min.innerHTML = text_min;
        
    arr_max.forEach(function(item) {
        bl2.appendChild(item);
        });
        
    arr_min.forEach(function(item) {
        bl2.appendChild(item);
    });

    btn_max.onclick = f_max;
    btn_min.onclick = f_min;
    
    function showInfo (txt) {
            p.innerHTML = txt;
            p.setAttribute('class','style-result');
            bl2.appendChild(p);
    }
    
    function f_max () {
        if (input_max.validity.rangeOverflow) {
            showInfo("Valuer too large");
        } else {
            showInfo("Valuer is OK < 100");
        }
    }
    
    function f_min () {
        if (input_min.validity.rangeUnderflow) {
            showInfo("Valuer too small");
        } else {
            showInfo("Valuer is OK > 100");
        }
    }
}

