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
}

userActivity();