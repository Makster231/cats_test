(function ($, window, document) {

  function showMessage(){
    let $message = $(".js_message");
    $message.addClass("js_active");

    setTimeout(function(){
      $message.removeClass("js_active");
    }, 1000)
  }

  function addInСhosen(){
    $(".js_choice_card-like").on("click", function(){
      let $this = $(this);


      if($this.hasClass("js_active")){
        $this.removeClass("js_active");

      }else{
        $this.addClass("js_active");
        showMessage();
      }
    })
  }

  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    //Activate click on Like icon
    addInСhosen();
  });
})(window.jQuery, window, document);
