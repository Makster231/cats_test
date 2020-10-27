
(function ($, window, document) {

    function scrollTop(){
        $(".js_scroll-top").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr("data-href"),
                top = $(id).offset().top;
        
            $("body,html").animate({ scrollTop: top }, 500);
        });
    }

    function showScrollBtn(){

        var $element = $('.js_choice');
        let counter = 0;
        var $rocket_block = $(".js_scroll-top");

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var offset = $element.offset().top;
            if (scroll > offset && counter === 0) {
              $rocket_block.addClass("js_active");
            }else{
              $rocket_block.removeClass("js_active");
            }
        });
    }

    $(() => {
      scrollTop();
      showScrollBtn();
    });

})(window.jQuery, window, document);
