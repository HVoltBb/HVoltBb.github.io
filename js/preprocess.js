document.addEventListener('keyup', function(e){
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('No No No');
    }
}, false);

function checkISP(){
    const risky = new Set();
    risky.add("70b2c13a3ea377a7f4099841ffc1eaa9x"); // suddenlink static
    risky.add("c44188faf1738e8d3d02419293480761"); // u center at north gate free wifi
    risky.add("e801752c7a208f656a2f146292540d58"); // suddenlink dynamic
    risky.add("219213f5825cc281314dc7a1b9f04243"); // suddenlink dynamic

    function checkISP_(ip){
        if(risky.has(ip)){
            return true;
        }else{
            return false;
        }
    }

    return checkISP_;
}

var checkit = checkISP();

var lastScrollTop = 0;

document.addEventListener('scroll', function(){
    var currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop){
        //downscroll
        document.getElementById('nav').classList.add('nav-hidden');
    }else{
        //upscroll
        document.getElementById('nav').classList.remove('nav-hidden');
    }
    lastScrollTop = currentScrollTop;

    // hide the flashing indicator
    if (currentScrollTop > screen.height * 0.2){
        document.getElementById('flashingIcon').classList.add('hideMe');
    }else{
        document.getElementById('flashingIcon').classList.remove('hideMe');
    }
});