let number_1 = 10,
    number_2 = '10',
    number_3 = 10;
let doc = document.getElementById('id-1');
doc.innerHTML = 'The type of value_1: <b>' + (typeof number_1) + '</b>' + '; The volue_1 is: ' + number_1 + 
    '<br> The type of value_2: <b>' + (typeof number_2) + '</b>' + '; The volue_2 is: ' + number_2 + 
    '<br> The type of value_3: <b>' + (typeof number_3) + '</b>' + '; The volue_3 is: ' + number_3 +
    '<br><br><hr>equal: ' + number_1 + ' == 10: ' + (number_1 == 10) + 
    '<br><hr>equal: ' + number_1 + ' == ' + number_2 + ' Type is: <b>' + (typeof number_2) +'</b>: ' + (number_1 == number_2) +
    '<br><hr>equal: ' + number_1 + ' == 15: ' + (number_1 == 15);
doc.innerHTML += '<br><br><b>=== equal value and equal type</b>' +
    '<br>The type of value_1 is: ' + (typeof number_1) +
    '<br>The type of value_2 is: ' + (typeof number_2) +
    '<br>Volue_1: ' + number_1 + ' === ' + '10; ' + (number_1 === 10) +
    '<br>Volue_1: ' + number_1 + ' === ' + number_2 + '; ' + (number_1 === number_2) +
    '<br>!= not equal (value_1 != value_3): ' + (number_1 != number_3) +
    '<br>!== not equal value or not equal type (value_1 !== value_2): ' + (number_1 !== number_2);

//How Can it be Used
if (number_1 == number_2) {
    document.getElementById('id-2').innerHTML = 'Runed! Value_1 == Value_2. The value_2 is: ' + (typeof number_2) +
        '; The value_1 is ' + (typeof number_1);
}

//Logical Operators
let numA = 15,
    numB = 20,
    numC = 0;
document.getElementById('id-3').innerHTML = 'Operator(and) &&; <b>' + numA + ' > ' + numC + ' && '
    + numB + ' > ' + numC + '</b>; ' + (numA > 0 && 20 < 100) +
    '<br>Operator(or) || ;<b> ' + numA + ' > ' + numB + ' || ' + numB + ' > ' + numC + '</b>; ' +
    (numA > numA || numB > numC) +
    '<br>Operator(not) ! ; <b> ' + numA + ' !== ' + numB + '</b> ' + (numA !== numB);

//Conditional (Ternary) Operator
function checkAge() { 
let age = document.getElementById('inputAge').value;
let doc2 = document.getElementById('id-4');
    /*if (age >= 0 && age <=120) {
        age >= 18 ? doc2.innerHTML = 'You are adult' : doc2.innerHTML = 'You are yang';
    } else {
        doc2.innerHTML = 'ERROR';
    };*/
    (age >= 1 && age <=120) ? ( age >= 18 ? doc2.innerHTML = 'You are Adult' : doc2.innerHTML = 'You are Young' ) : doc2.innerHTML = 'ERROR';
};