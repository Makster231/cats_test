"use strict";

(function ($, window, document) {
  function scrollTop() {
    $(".js_scroll-top").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr("data-href"),
          top = $(id).offset().top;
      $("body,html").animate({
        scrollTop: top
      }, 500);
    });
  }

  function showScrollBtn() {
    var $element = $('.js_choice');
    var counter = 0;
    var $rocket_block = $(".js_scroll-top");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var offset = $element.offset().top;

      if (scroll > offset && counter === 0) {
        $rocket_block.addClass("js_active");
      } else {
        $rocket_block.removeClass("js_active");
      }
    });
  }

  $(function () {
    scrollTop();
    showScrollBtn();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  jQuery.validator.setDefaults({
    errorElement: "label",
    errorClass: "error",
    focusInvalid: false,
    errorPlacement: function errorPlacement(error, element) {
      $(element).closest(".form-group").append(error);
    },
    highlight: function highlight(element, errorClass, validClass) {
      var fieldWrap = $(element).closest(".form-group");
      fieldWrap.addClass("has-error");
      $(element).addClass("error");
    },
    unhighlight: function unhighlight(element, errorClass, validClass) {
      $(element).closest(".form-group").removeClass("has-error");
      $(element).removeClass("error");
    }
  });
  jQuery.validator.addMethod('emailCustom', function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
  }, 'Please enter a valid email address');

  function validationConfig(form) {
    form.validate({
      errorElement: 'label',
      errorClass: 'error',
      focusInvalid: false,
      errorPlacement: function errorPlacement(error, element) {
        $(element).closest('.form-group').append(error);
      },
      highlight: function highlight(element, errorClass, validClass) {
        var fieldWrap = $(element).closest('.form-group');
        fieldWrap.addClass('has-error');
        $(element).addClass('error');
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        $(element).closest('.form-group').removeClass('has-error');
        $(element).removeClass('error');
      },
      rules: {
        Email: {
          required: true,
          emailCustom: true
        }
      }
    });
  }

  function sendForm() {
    $('.js_subscribe-form').on("submit", function (e) {
      e.preventDefault();
      var $this = $(this);
      validationConfig($this);
      var isValid = $this.valid();

      if (!isValid) {
        alert("not valid form");
        return;
      } else {
        alert("Valid form");
      }
    });
  }

  $(function () {
    sendForm();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $("head").prepend('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/tooltipster.min.css" />');
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function showMessage() {
    var $message = $(".js_message");
    $message.addClass("js_active");
    setTimeout(function () {
      $message.removeClass("js_active");
    }, 1000);
  }

  function addInСhosen() {
    $(".js_choice_card-like").on("click", function () {
      var $this = $(this);

      if ($this.hasClass("js_active")) {
        $this.removeClass("js_active");
      } else {
        $this.addClass("js_active");
        showMessage();
      }
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); //Activate click on Like icon

    addInСhosen();
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
