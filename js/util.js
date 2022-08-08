function addClass(id, x=""){
    var v = document.getElementById(id);
    v.className += String(x);
}

function userActivity(){
let userScoreTag = 'score';
let userTimestampTag = 'ts';
let userScore = window.localStorage.getItem(userScoreTag);
let userLastTS = window.localStorage.getItem(userTimestampTag);
if(userScore == null){
    userScore = '0';
    userLastTS = Date.now();
}else if((Date.now() - parseInt(userLastTS)) > 1000*60){
    userScore++;
}
window.localStorage.setItem(userScoreTag, userScore);
window.localStorage.setItem(userTimestampTag, userLastTS);

window.addEventListener('load', ()=>{
    let userScore_n = parseInt(userScore);
    if(userScore_n == 0){
        document.getElementById('u0').classList.remove('hidden'); 
    }else if (userScore_n < 5){
        document.getElementById('u1').classList.remove('hidden');
    }else{
        document.getElementById('u2').classList.remove('hidden');
    }

}, false);
}

userActivity();