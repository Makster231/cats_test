(function ($, window, document) {

    function preventDefault(e) {
        e.preventDefault();
    }
        
    function disableScroll() {
        document.body.addEventListener('touchmove', preventDefault, {passive: false});
    }
        
    function enableScroll() {
        document.body.removeEventListener('touchmove', preventDefault, {passive: false});
    }

    function activateBurgerMenu(){
        if($(window).width() < 640){
            $(".js_burger-btn").on("click", function(){
                let $this = $(this);

                if(!$this.hasClass("js_active")){
                    $("body").addClass("js_burger-active");
                    $this.addClass("js_active");
                    disableScroll();
                }else{
                    $("body").removeClass("js_burger-active");
                    $this.removeClass("js_active");
                    enableScroll();
                }
             })
        }
    }

    $(() => {
        activateBurgerMenu();
    });
})(window.jQuery, window, document);
