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
