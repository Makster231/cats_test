(function ($, window, document) {

  function showMessage(){
    let $message = $(".js_message");
    $message.prepend("<p class='js_message-item--anim'>Добавлено в избранное</p>");
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

  function getSorted(selector, attrName, descending) {
    return $($(selector).toArray().sort(function(a, b){
        var a = parseInt(a.getAttribute(attrName)),
            b = parseInt(b.getAttribute(attrName));

            if(descending){
              return b - a;
            }else{
              return a - b;
            }
    }));
  }

  function sortCards(){
    $(".js_choice_header-btn").on("click", function(){
      let $this = $(this);
      let $catalog = $(".js_choice_main");
      $(".js_choice_header-btn").removeClass("js_sorted");


      if($this.attr("data-value") === "price"){

        // По возрастанию
        if($this.hasClass("js_sorted_ascending")){
          $catalog.html(getSorted('.js_choice_main-card', 'data-price'));
          $this.addClass("js_sorted");
          $this.removeClass("js_sorted_ascending");
        }else{
        // По убыванию
          $catalog.html(getSorted('.js_choice_main-card', 'data-price', true));
          $this.addClass("js_sorted_ascending")
        }

      }else{

        // По возрастанию
        if($this.hasClass("js_sorted_ascending")){
          $catalog.html(getSorted('.js_choice_main-card', 'data-age'));
          $this.addClass("js_sorted");
          $this.removeClass("js_sorted_ascending")
        }else{
        // По убыванию
          $catalog.html(getSorted('.js_choice_main-card', 'data-age', true));
          $this.addClass("js_sorted_ascending")
        }

      }


    })
  }

  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    //Activate click on Like icon
    addInСhosen();
    //Sort Cards
    sortCards();

  });
})(window.jQuery, window, document);
