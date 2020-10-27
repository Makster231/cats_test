
  

  
  (function ($, window, document) {

    jQuery.validator.setDefaults({
        errorElement: "label",
        errorClass: "error",
        focusInvalid: false,
      
        errorPlacement: function(error, element) {
          $(element)
            .closest(".form-group")
            .append(error);
        },
      
        highlight: function(element, errorClass, validClass) {
          let fieldWrap = $(element).closest(".form-group");
      
          fieldWrap.addClass("has-error");
          $(element).addClass("error");
        },
      
        unhighlight: function(element, errorClass, validClass) {
          $(element)
            .closest(".form-group")
            .removeClass("has-error");
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

            errorPlacement: function (error, element) {
                $(element).closest('.form-group').append(error);
            },

            highlight: function (element, errorClass, validClass) {
                let fieldWrap = $(element).closest('.form-group');

                fieldWrap.addClass('has-error');
                $(element).addClass('error');
            },

            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass('has-error');
                $(element).removeClass('error');
            },


            rules: {
                Email: {
                    required: true,
                    emailCustom: true,
                }
            }
        });
    }


    function sendForm (){
        $('.js_subscribe-form').on("submit", function (e) {
            e.preventDefault();
            var $this = $(this);

            validationConfig($this);

            var isValid = $this.valid();

            if (!isValid) {

                alert("not valid form");
                return;
            }else{
                alert("Valid form");
            }
        });
    }



    $(() => {
        sendForm ();
    });
  })(window.jQuery, window, document);
  