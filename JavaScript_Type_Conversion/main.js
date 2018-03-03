// The typeof Operator
let doc_1 = document.getElementById('id_1');
let radio = document.getElementsByName('name_1');
let radioLength = radio.length;
let textResult = 'Result typeof: ';
console.log(radio);
console.log(radioLength);

function runCheck_1() {
    var arr = ['Alex',
           3.14,
           NaN,
           false,
           [1,2,3,7,1],
           {name:'Jon',age:35},
           new Date(),
           function(){},
           undefined,
           null];
    doc_1.innerHTML = '';
    for (let i = 0; radioLength > i; i++) {
    if (radio[i].checked) { 
        console.log(typeof arr[i]); 
        doc_1.innerHTML = textResult + arr[i] + ' // ' + (typeof arr[i]);
    };
    };
};

//The constructor Property
function runConstructorProp() {
    let doc_2 = document.getElementById('id_2');
    let arrColor = ['red', 'green', 'yellow'];
    let myDate = new Date();
    doc_2.innerHTML = '<b>"Alex".constructor = </b>' + "Alex".constructor +
        '<br><b>(3.14).constructor = </b>' + (3.14).constructor +
        '<br><b>false.constructor = </b>' + false.constructor +
        '<br><b>[1,2,3,44,22].constructor = </b>' + [1,2,3,44,22].constructor +
        '<br><b>{name: "Alex", age: 30}.constructor = </b>' + {name: "Alex", age: 30}.constructor +
        '<br><b>new Date().constructor = </b>' + new Date().constructor + 
        '<br><b>function() {}.constructor = </b>' + function() {}.constructor;
    doc_2.innerHTML += '<br>Find out if an object is an Array using "constructor" (contains the word "Array"): <b>' +
        runCheckArr_1(arrColor, 'Array') + '</b>' + 
        '<br>Other simpler way, check if the object is an Array function: <b>' + 
        runCheckArr_2(arrColor, Array) + '</b>' + 
        '<br>Find out if an object is a Date (contains the word "Date"): <b>' + runCheckArr_1(myDate, 'Date') + '</b>' +
        '<br>Othere simpler way, check if the object is a Date function: <b>' + runCheckArr_2(myDate, Date); 
    function runCheckArr_1(arg_1, value_1) {
        return arg_1.constructor.toString().indexOf(value_1) > -1;
    };
    function runCheckArr_2(arg_2, value_2) {
        return arg_2.constructor === value_2;
    };
};
runConstructorProp();

//Converting Numbers to Strings
runConvertNumbers();
function runConvertNumbers() {
    let doc_3 = document.getElementById('id_3');
    let number_3 = 100;
    let num_3 = 345.123456;
    doc_3.innerHTML = 'The type of: ' + typeof number_3 + '; convert to: ' + String(number_3) +
        '<br>The type of: ' + typeof 125 + '; convert to: ' + String(125) +
        '<br>The Number method toString() does the same. The type of: ' + typeof number_3 +
        '; convert to: ' + number_3.toString() +
        '<br>The Number method toString() does the same. The type of: ' + typeof 125 + 
        '; convert to: ' + (125).toString() +
        '<br><br>The number = ' + num_3 + '; toExponential(): ' + (num_3).toExponential() +
        '<br>The number = ' + num_3 + '; toFixed(): ' + (num_3).toFixed() +
        '<br>The number = ' + num_3 + '; toPrecision(1): ' + (num_3).toPrecision(1) +
        '<br>The number = ' + num_3 + '; toPrecision(2): ' + (num_3).toPrecision(2) +
        '<br>The number = ' + num_3 + '; toPrecision(3): ' + (num_3).toPrecision(3) +
        '<br>The number = ' + num_3 + '; toPrecision(4): ' + (num_3).toPrecision(4) +
        '<br>The number = ' + num_3 + '; toPrecision(5): ' + (num_3).toPrecision(5) +
        '<br>The number = ' + num_3 + '; toPrecision(6): ' + (num_3).toPrecision(6);
};

//Converting Booleans to Strings
runConvertBollen();
function runConvertBollen() {
    let doc_4 = document.getElementById('id_4');
    let f = false;
    let t = true;
    doc_4.innerHTML = 'The value 1, typeof is: ' + typeof f + '; Convert to string: ' + String(f) +
        '<br>The value 2, typeof is: ' + typeof t + '; Convert to string: ' + String(t) +
        '<br><b>The Boolean method toString() does the same.</b>' +
        '<br>Conver to string: ' + f.toString() +
        '<br>Convert to string: ' + t.toString();
};

//Converting Dates to Strings
runConvertDate();
function runConvertDate() {
    let doc_5 = document.getElementById('id_5');
    let date_5 = new Date();
    doc_5.innerHTML = 'The typeof is: ' + typeof date_5 + 
        '<br>Convert to string: ' + String(date_5) +
        '<br><b>The Date method toString() does the same.</b>' +
        '<br>Convert to string: ' + date_5.toString() + 
        '<br><br>' +
        '<br><b>getDate()</b> Get the day as a number (1-31): ' + date_5.getDate() +
        '<br><b>getDay()</b> Get the weekday a number (0-6): ' + date_5.getDay() +
        '<br><b>getMonth()</b> Get the month (0-11): ' + date_5.getMonth() +
        '<br><b>getFullYear()</b> Get the four digit year (yyyy): ' + date_5.getFullYear() +
        '<br><b>getHours()</b> Get the hour (0-23): ' + date_5.getHours() +
        '<br><b>getMinutes()</b> Get the minutes (0-59): ' + date_5.getMinutes() +
        '<br><b>getSeconds()</b> Get the seconds (0-59): ' + date_5.getSeconds() +
        '<br><b>getMilliseconds()</b> Get the milliseconds (0-999): ' + date_5.getMilliseconds() +
        '<br><b>getTime()</b> Get the time (milliseconds since January 1, 1970): ' + date_5.getTime();
};

//Converting Strings to Numbers
runConvertToNumber();
function runConvertToNumber() {
    let doc_6 = document.getElementById('id_6');
    let doc_7 = document.getElementById('id_7');
    let arrOfRadio = document.getElementsByName('radio_string');
    let len = arrOfRadio.length;
    for (let i = 0; i < len; i++) {
        arrOfRadio[i].onchange = function () {
            console.log(arrOfRadio[i].value);
             doc_6.innerHTML = 'It was a: ' + arrOfRadio[i].value + '; ' +
                 '<br>Convetr to: ' + Number( arrOfRadio[i].value ) + 
                 '<br><br><b>parseFloat()</b> Parses a string and returns a floating point number: <b>' +
                 parseFloat(arrOfRadio[i].value) + '</b>' +
                 '<br><b>parseInt()</b> Parses a string and returns an integer: <b>' +
                 parseInt( arrOfRadio[i].value );
        }; 
    };
    // doc_7.innerHTML = '<b>parseFloat()</b> Parses a string and returns a floating point number' + 
    //    ': ' + parseFloat('   2.5367') +  
    //    '<br><b>parseInt()</b> Parses a string and returns an integer';
};

//The Unary + Operator
runUnaryOperator();
function runUnaryOperator() {
    let doc_8 = document.getElementById('id_8');
    let text_1 = 'The <b>unary + operator</b> can be used to convert a variable to a number';
    let text_2 = 'If the variable cannot be converted, it will still become a number, but with the value <b>NaN</b> (Not a number)';
    let value_1 = '10',
        value_2 = + value_1,
        value_3 = 'Alex',
        value_4 = + value_3;
    doc_8.innerHTML = text_1 + '<br>The value_1: ' + value_1 + '; The type of: ' + typeof value_1 + 
        '<br>The value_2: ' + value_2 + '; The type of: ' + typeof value_2 + 
        '<br><br>' + text_2 + 
        '<br>The value_3: ' + value_3 + '; The type of: ' + typeof value_3 +
        '<br>The value_4: ' + value_4 + '; The type of: ' + typeof value_4;
};

//Converting Booleans to Numbers
runBoolToNumber();
function runBoolToNumber() {
    let doc_9 = document.getElementById('id_9');
    let text_1 = 'The global method <b>Number()</b> can also convert booleans to numbers.';
    let value_A = true,
        value_B = false;
    doc_9.innerHTML = 'Value A: ' + value_A + ';<br>Value B: ' + value_B + ';<br>' +
        'The typeof value_A: ' + typeof value_A +
        '<br>The typeof value_B: ' + typeof value_B + 
        '<br>Convert value_A to number: ' + Number(value_A) +
        '<br>Convert value_B to number: ' + Number(value_B) ;
};

//Converting Dates to Numbers
runDateToNumber();
function runDateToNumber() {
    let doc_10 = document.getElementById('id_10');
    let text_1 = 'The global method Number() can be used to convert dates to numbers.',
        text_2 = 'The date method getTime() does the same.';
    let myDate = new Date();
    doc_10.innerHTML = text_1 + '<br>The date is: ' + myDate +
        '<br>Convert to number: ' + Number(myDate) +
        '<br>' + text_2 + '<br>getTime(): ' + myDate.getTime();
};

//