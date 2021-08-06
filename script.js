function getNote(){
    if(localStorage.getItem('note')){
        let note = localStorage.getItem('note');
    } else {
        let note = "Go ahead and edit this note to save in local storage";
    }

    document.getElementById('note').innerHTML = note;
}

function saveNote(id){
    let note = document.getElementById('note').innerHTML;
    localStorage.setItem('note', note);
}

function clearNote(){
    clear: localStorage.clear();
    return false;
}