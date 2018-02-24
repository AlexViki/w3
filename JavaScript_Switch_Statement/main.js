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

//Common Code Blocks
function runMonth_3() {
    let doc3 = document.getElementById('id_3');
    let inputMonth_3 = (document.getElementById('input_month3').value) * 1;
    let tmp_3;
    switch (inputMonth_3 - 1) {
        default:
            tmp_3 = 'ERROR!!! Month can not be less 0 or more 12';
            break;
        case 11:
        case 0:
        case 1:
            tmp_3 = 'Winter';
            break;
        case 2:
        case 3:
        case 4:
            tmp_3 = 'Spring';
            break;
        case 5:
        case 6:
        case 7:
            tmp_3 = 'Summer';
            break;
        case 8:
        case 9:
        case 10:
            tmp_3 = 'Autumn';
    };
    doc3.innerHTML = 'The season is <b>' + tmp_3 + '</b>';
};