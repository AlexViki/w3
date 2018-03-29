var arrayReservWords = [
    "abstract", "arguments", "await*", "boolean",
    "break", "byte", "case", "catch"];

createTable();
function createTable () {
    var bl1 = document.getElementById('bl1');
    var table = document.createElement("table");
    var i,j,e;
    var len = arrayReservWords.length;
    var colums = 4 // столбец
	var rows = Math.ceil(len / colums); // строки
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
}
