
jQuery(document).ready(function($) {
    $(".animated_highlight").each(function(){
        var hightlight = $(this);
        console.log(hightlight);
        var scrollHandler = function(){
                if(hightlight.offset().top < ($(this).scrollTop()+$(window).height()-200)){
                    hightlight.addClass("animation");
                }
        }
        $(window).on("scroll" , scrollHandler);
    })
});


