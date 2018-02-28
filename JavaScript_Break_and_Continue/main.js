// The Break Statement
function funWithBreakre() {
    let doc_1 = document.getElementById('id_1');
    
    for(let i = 0; i < 10; i++) {
        if(i === 5) { 
            break;
        };
        doc_1.innerHTML = 'The breack was executed when i = ' + i ; 
    };
};
funWithBreakre();