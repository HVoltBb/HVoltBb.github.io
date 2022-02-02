function showBadge(){
    let userScore = window.localStorage.getItem("score");
    let numStars=null;
    if (userScore == 0) {
        numStars = 1;
    }else if (userScore<5){
        numStars = 2;
    }else{
        numStars = 3;
    }

    let elm = document.getElementById("userBadge");
    let star = "<i class='fas fa-star'></i>";
    let text = "";
    for(i=0; i<numStars; i++){
        text = text + star;
    }
    elm.innerHTML=text;
}
showBadge();