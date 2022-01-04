function pickAQuote(num=0){
    var text = '<h2>"'+ quotes_[num].text + '"</h2><p>-'+quotes_[num].author+'</p>'
    document.getElementById('quote').innerHTML = text;    
}

d = Date.now();
var n = quotes_.length;
// A simple linear conguential RNG that changes daily
pickAQuote((d*6+89)%n);