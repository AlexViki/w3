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