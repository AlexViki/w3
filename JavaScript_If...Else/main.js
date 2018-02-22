//The if, else, else if Statement
function am_pm() {
    let doc1 = document.getElementById('id-1');
    let doc_input_am_pm = document.getElementById('input_am_pm').value;
    console.log(doc_input_am_pm);
    
    if (doc_input_am_pm > 24 || doc_input_am_pm < 0) {
        doc1.innerHTML = "ERROR!!!";
    } else if (doc_input_am_pm <= 12) {
        doc1.innerHTML = "Morning";
    } else if (doc_input_am_pm > 12) {
        doc1.innerHTML = "Evening";
    };
};