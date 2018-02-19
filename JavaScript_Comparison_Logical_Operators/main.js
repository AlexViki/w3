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

//Comparing Different Types
let a1 = 9,
    a2 = '18',
    a3 = 'Alex',
    a4 = 2,
    a5 = '2';
let doc5 = document.getElementById('id-5');

doc5.innerHTML = 'We have three value: ' + '<br>Value1: ' + a1 + '; <b>Type: ' + (typeof a1) + '</b>' +
    '<br>Value2: ' +a2 + '; <b>Type: ' + (typeof a2) + '</b>' +
    '<br>Value3: ' + a3 + '; <b>Type: ' + (typeof a3) + '</b>' +
    '<br>Value4: ' + a4 + '; <b>Type: ' + (typeof a4) + '</b>' +
    '<br>Comparing numbers: ' + a1 + ' > ' + a4 + '; ' + (a1 > a4) +
    '<br>Comparing number and string: ' + a4 + ' < ' + a2 + '; ' + (a4 < a2) + 
    '<br>Comparing number and string: ' + a1 + ' < ' + a3 + '; ' + (a1 < a3) +
    '<br>Comparing number and string: ' + a1 + ' > ' + a3 + '; ' + (a1 > a3) +
    '<br>Comparing number and string: ' + a1 + ' == ' + a3 + '; ' + (a1 == a3) +
    '<br>Comparing string and string: ' + a5 + ' > ' + a2 + '; ' + (a5 > a2) +
    '<br>Comparing string and string: ' + a5 + ' < ' + a2 + '; ' + (a5 < a2) +
    '<br>Comparing string and string: ' + a5 + ' == ' + a2 + '; ' + (a5 == a2) + 
    '<br>When comparing two strings, "' + a5 + '" will be greater than "' + a2 + '", because (alphabetically) 1 is less than 2.';

//button checkAge2()
function checkAge2() {
    let doc6 = document.getElementById('id-6'),
        age2 = document.getElementById('inputAge2').value;
    //age2 is not a number (if string "isNaN" return true)
    (isNaN(age2)) ? ( doc6.innerHTML = 'Value is not a number!!!') :
        //you can not have age less than 0
        (age2 < 0 ? doc6.innerHTML = 'ERROR: age < 0 !!! ' : 
            //you can not have age bigger then 120
            (age2 >= 120 ? doc6.innerHTML = 'ERROR: age > 120 !!! ' : 
                //checking who are you, young or adult
                ( age2 >= 18 ? doc6.innerHTML = 'You are adult!' : 
                 doc6.innerHTML = 'You are young :)' 
                )
            )
        );  
};
  
    