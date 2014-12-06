/*Script JS pour implanter des modifs du design nécessaire à une meilleure cohésion entre le thème de base et perso.css*/

(function($){
    
    var nav = $('.navbar');
    var mainHeader = $('.main-header');
    var fixBackground = 'rgba(0,0,0,0.5)';
    var notFixBackground = 'rgba(0,0,0,0)';
    var navbarTop = parseInt(mainHeader.css('height'),10) - parseInt(nav.css('height'),10);
    nav.css('top',navbarTop);
    
        
    //Code to set active the button corresponding to the active page
    window.onload = function() {
        $('ul.nav li a.active').removeClass("active");
        $('a[href="'+document.location.pathname+'"]').addClass("active");
        //Mobile navbar
        if($('.navbar-toggle').css("display") == "block") {
            notFixBackground = 'rgba(0,0,0,0.5)';
            nav.css('background', 'rgba(0,0,0,0.5)');
        }
        else if(mainHeader.hasClass('no-cover')) {
            notFixBackground = 'rgba(0,0,0,0.5)';
            nav.css('background', 'rgba(0,0,0,0.5)');
        }
            
    };
    
    //Sticky Nav bar
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width(),
                background: fixBackground
            });

            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'absolute',
                top: navbarTop,
                background: notFixBackground
            });
            isFixed = false;
        }
    });
    
    

})(jQuery);