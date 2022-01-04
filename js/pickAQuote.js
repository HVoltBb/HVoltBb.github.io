function pickAQuote(num=0){
    var text = '<h2>"'+ quotes_[num].text + '"</h2><p>-'+quotes_[num].author+'</p>'
    document.getElementById('quote').innerHTML = text;    
}

d = new Date();
var n = quotes_.length;
pickAQuote(d.getDay()%n);