//The JavaScript Switch Statement
let id_1Text = 'The day totay is: ';
document.getElementById('id-1').innerHTML = id_1Text;
function dayTodayIs() {
    let doc1 = document.getElementById('id-1');
    let currentDay = new Date().getDay();
    let day;
    //console.log(currentDay);
    //switch (new Date().getDay()) {
    switch (currentDay) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
    };
    doc1.innerHTML += '<b>' + day + '</b>';
};

//The default Keyword
let id_2Text = 'Click on this block ';
document.getElementById('id-2').innerHTML = id_2Text;
function runMonth() {
    let doc2 = document.getElementById('id-2');
    let inputMonth = (document.getElementById('input_month').value) * 1;        
    let month;
    switch (inputMonth - 1) {
        default:
            month = 'ERROR! Month can not be less 0 or more 12';
            break;
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
    };
    doc2.innerHTML = id_2Text + '<b>' + month + '</b>';
};