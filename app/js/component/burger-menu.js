(function ($, window, document) {

    function activateBurgerMenu(){
        if($(window).width() < 640){
            $(".js_burger-btn").on("click", function(){
                let $this = $(this);

                if(!$this.hasClass("js_active")){
                    $("body").addClass("js_burger-active");
                    $this.addClass("js_active");
                }else{
                    $("body").removeClass("js_burger-active");
                    $this.removeClass("js_active");
                }
             })
        }
    }

    $(() => {
        activateBurgerMenu();
    });
})(window.jQuery, window, document);
