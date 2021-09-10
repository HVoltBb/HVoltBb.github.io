function subject(sub){
    var books = document.getElementById('book_shelf').childNodes;

    if (sub === 'all'){
         // show everything
         for(var i=0; i < books.length; i++){
             books[i].style.display = "block";
         }
    }else{
        // only show sub
        for(var i=0; i < books.length; i++){
            if(books[i].dataset.subject === sub){
                books[i].style.display = "block";
            }else{
                books[i].style.display = "none";
            }

        }
    }
}
