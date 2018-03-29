var arrayReservWords = [
    "abstract", "arguments", "await*", "boolean",
    "break", "byte", "case", "catch"];

createTable();
function createTable () {
    var bl1 = document.getElementById('bl1');
    var table = document.createElement("table");
    var i,j,e;
    var len = arrayReservWords.length;
    var rows = 4; // строки
    var colums = Math.ceil(len/rows); // столбец
    console.log(colums);
    var tr = "";
    var td  = "";
    var text = "";
    // вывод ключевых слов из масива
    //for (e = 0; e < len; e++ ) {
    //    console.log(arrayReservWords[e]);;
    //}
    for (e in arrayReservWords) {
    text = document.createTextNode( arrayReservWords[e] );
    console.log(text);
    }
    //

    for (e = 0; e < len; e++) {
        text = document.createTextNode( arrayReservWords[e] );
        for (i = 0; i < rows; i++) {
            tr = document.createElement("tr"); // строка
            for (j = 0; j < colums; j++) {
                td = document.createElement("td")// столбец
                td.appendChild(text);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
        console.log(tr);
    }
}