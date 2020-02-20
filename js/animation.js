
jQuery(document).ready(function($) {
    $(".animated_highlight").each(function(){
        var hightlight = $(this);
        var scrollHandler = function(){
                if(hightlight.offset().top < ($(this).scrollTop()+$(window).height()-200)){
                    hightlight.addClass("animation");
                }
        }
        $(window).on("scroll" , scrollHandler);
    })
});


