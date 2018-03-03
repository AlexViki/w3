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