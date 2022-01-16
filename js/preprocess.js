document.addEventListener('keyup', function(e){
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('No No No');
    }
}, false);