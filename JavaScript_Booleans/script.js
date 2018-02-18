//The Boolean() Function
let number1 = 20,
    number2 = 50;
id1 = document.getElementById('id-1');
id1.innerHTML += 'Number 1: ' + number1 + '<br>Number 2: ' + number2 +
    '<br>Is <b>Number 1</b> less then <b>Number 2</b> ???';
function funCheckBollen() {
    id1.innerHTML += '<br>Result: <b>' + Boolean(number1 < number2) + '</b>';
};

// Everything With a "Value" is True
let number3 = 10.03,
    number4 = -16,
    number5 = 'Hi',
    number6 = (3 + 5),
    number7 = -0,
    number8 = '',
    number9,
    number10 = null,
    number11 = false,
    number12 = 20 / "A";
document.getElementById('id-2').innerHTML = 'number3 = ' + number3 + '; type: ' + ( typeof number3) +
    "; and it's <b>" + Boolean(number3) + '</b>; type: ' + (typeof Boolean(number3)) +
    '<br><br>number4 = ' + number4 + "; and it's <b>" + Boolean(number4) + '</b>' +
    '<br>number5 = ' + number5 + "; and it's <b>" + Boolean(number5) + '</b>' +
    '<br>number6 = ' + number6 + "; and it's <b>" + Boolean(number6) + '</b>' +
    '<br><hr><b>but...</b>' +
    '<br>number7 = ' + number7 + "; and it's <b>" + Boolean(number7) + '</b>' +
    '<br>number8(empty string) = ' + number8 + "; and it's <b>" + Boolean(number8) + '</b>' +
    '<br>value of undefined = ' + number9 + "; and it's <b>" + Boolean(number9) + '</b>' +
    '<br>value of null = ' + number10 + "; and it's <b>" + Boolean(number10) + '</b>' +
    '<br>value of false = ' + number11 + "; and it's <b>" + Boolean(number11) + '</b>' +
    '<br>value of NaN = ' + number12 + "; and it's <b>" + Boolean(number12) + '</b>';

let bollen1 = false;
let bollen2 = new Boolean (false);
let bollen3 = new Boolean (false);
document.getElementById('id-3').innerHTML = 'Value: ' + bollen1 +
    '<br>Value 2: ' + bollen2 +
    '<br><hr>using the == operator, equal booleans are equal: <b>' + (bollen1 == bollen2) + '</b>' +
    '<br><hr>using the === operator, equal booleans are not equal: <b>' + (bollen1 === bollen2) + '</b>' +
    '<br><hr><b>the === operator expects equality in both type and value</b>';
document.getElementById('id-3').innerHTML+='<br><br>Value 2: ' + bollen2 +
    '<br>Value 2: ' + bollen2 +
    '<br>The type of value 2: ' + (typeof bollen2) +
    '<br>The type of value 3: ' + (typeof bollen3) +
    '<br>Compared two object: <b>' + (bollen2 == bollen3) + '</b>' +
    '; Is false because objects cannot be compared!!!';
