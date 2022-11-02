$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

        $('#theme-toggle').click(function(){
            // Presumably a theme is already set after page load
            const theme = localStorage.getItem('theme');
            var root = document.documentElement;
            var TSwitch = document.getElementById('theme-toggle'); 
            if(theme === 'light-theme'){
                root.setAttribute('class', 'dark-theme');
                TSwitch.setAttribute('class', 'dark-mode-switch');
                localStorage.setItem('theme', 'dark-theme');
            }else{
                root.setAttribute('class', 'light-theme');
                TSwitch.setAttribute('class', 'light-mode-switch');
                localStorage.setItem('theme', 'light-theme');
            }

            // Create an event
            const event = new Event('theme-change');
            document.dispatchEvent(event);            
            
        });

});