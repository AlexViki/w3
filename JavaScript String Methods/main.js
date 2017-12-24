var showLenghtFun = function () {
    var txt = "QWERTYUIOPKJHGFFDAA",
        sln = txt.length,
        tmp = document.getElementById('idP_1');
    tmp.innerHTML = "The lenght is: " + sln;
};

var indexOfFun = function () {
    var text1 = "\\My name is Alex\\";
    var pos = text1.indexOf('is');
    document.getElementById('idP_2').innerHTML = 'The string: ' + text1 + '<br> seach position of "is"';
    document.getElementById('button2').innerHTML = 'The position of "is": '  + pos;
};