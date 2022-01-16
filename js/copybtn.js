window.addEventListener("load", function(){
let copybtn = document.getElementsByClassName("copy-button");

Array.prototype.forEach.call(copybtn, x => {
  x.addEventListener("click", async ()=>{
    let text = x.parentElement.getElementsByTagName("code")[0].innerText;
    await navigator.clipboard.writeText(text);
    x.nextElementSibling.innerText= "Copied!";
    setTimeout(() => x.nextElementSibling.innerText="", 1000);
  })
})
}, false);