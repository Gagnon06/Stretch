/*Script JS pour implanter des modifs du design nécessaire à une meilleure cohésion entre le thème de base et perso.css*/

(function($){
    
    //Code to set active the button corresponding to the active page
    window.onload = function() {
        $('ul.nav li a.active').removeClass("active");
        $('a[href="'+document.location.pathname+'"]').addClass("active");
            
    };
    
    //Sticky Nav bar
    var nav = $('.navbar');
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
                background: 'rgba(0,0,0,0.5)'
            });

            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'absolute',
                top: 325,
                background: 'rgba(0,0,0,0.0)'
            });
            isFixed = false;
        }
    });

})(jQuery);