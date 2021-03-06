/*Script JS pour implanter des modifs du design nécessaire à une meilleure cohésion entre le thème de base et perso.css*/

(function($){
    
    var nav = $('.navbar');
    var mainHeader = $('.main-header');
    var fixBackground = 'rgba(0,0,0,0.5)';
    var notFixBackground = 'rgba(0,0,0,0)';
    var navbarTop = parseInt(mainHeader.css('height'),10) - parseInt(nav.css('height'),10);
    nav.css('top',navbarTop);

    window.onload = function() {
        //Code to set active the button and toggle between posts and home page
        var path = document.location.pathname;
        var hash = document.location.hash;
        
        if((path=="/" && hash=="#home") || (path=="/" && hash!="#blog")) {
            console.log("HOME");
            $('ul.nav li a.active').removeClass("active");
            $('a[href="/#home"]').addClass("active");
            $('.custom-blog').css('display','none');
            $('.custom-home').css('display','block');
        }
        else if(path=="/" && hash=="#blog") {
            console.log("BLOG");
            $('ul.nav li a.active').removeClass("active");
            $('a[href="/#blog"]').addClass("active");
            $('.custom-home').css('display','none');
            $('.custom-blog').css('display','block');
        }
        else {
            $('ul.nav li a.active').removeClass("active");
            $('a[href="'+path+'"]').addClass("active");
        }
        
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