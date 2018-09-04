//slick
$(function(){
     $('.js-b-slider').slick({
            dots: false,
            prevArrow: '<button id="prev" type="button" class="b-slider-arrows b-slider-arrows-prev"><span class="icon-arrow-left"></span></button>',
            nextArrow: '<button id="next" type="button" class="b-slider-arrows b-slider-arrows-next"><span class="icon-arrow-right"></span></button>'
     });
    });
$(function(){
     $('.js-partner-box').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          cssEase: 'linear',
          variableWidth: true
     });
});
//menu drop
$(document).ready(function(){
  $('.js-drop').click(function(e) {
     e.preventDefault();
     
     $(this).next('.js-drop-list').toggleClass('nav-drop-active');
   });
});
//slide btn
$(function() {
  $('#down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
//fixed menu
$(document).ready(function(){
   $(window).scroll(function(){
      if( $(window).scrollTop() > 40) {
              $('.js-header').css({position: 'fixed', top: '0px'});
              $('.js-header').addClass('fixed-style');
              $('.js-nav').addClass('fixed-style-nav');
              $('.js-logo-img').attr('src','img/logo-fix.png');
              $('.js-logo-txt').addClass('logo-txt-col');
              $('.js-header-top').addClass('hide-top');
              $('.hamburger-inner').addClass('hamburger-fixed');
      } else {
              $('.js-header').css({position: 'absolute'});
              $('.js-header').removeClass('fixed-style');
              $('.js-header-top').removeClass('hide-top');
              $('.js-nav').removeClass('fixed-style-nav');
              $('.js-logo-img').attr('src','img/logo.png');
              $('.js-logo-txt').removeClass('logo-txt-col');
              $('.hamburger-inner').removeClass('hamburger-fixed');           
            }
    });
});

//hamburger
$(document).ready(function(){
  $('#toggler').on('click', function(e) {
     e.preventDefault();

      $('#toggler').toggleClass('is-active');
      $('.js-nav').toggle()
    });
 });

//modal form
$(document).ready(function() {
    $('js-pop').fancybox();
  });

//validate
$(document).ready(function() {

  function isFormValid($form) {
      var is_correct = true, bln, $input, input_value, email_regex = /^([a-z0-9]|_){1}((\-|\.|_*)?[a-z0-9]+)*@[a-z0-9]{1}((\-|\.)?[a-z0-9]+)*\.[a-z]{2,}$/i;
      $form.find('.js-valid').each(function(){
        $input = $(this);
          input_value = $input.val();
          bln = true;
        if(!input_value) { bln = false }

          else{ if ($input.attr('type') == 'email' && !email_regex.test(input_value)){ bln = false } }

          if(!bln){
               $input.addClass('errorInput');
               $input.next('span').addClass('error-show');
               is_correct = false;
          }
      });
      return is_correct;
  };
    
    // function checkValid($form) {
    //   var iscorCheck = false;
    //   $form.find('.js-check').each(function(){
    //     if( $(this).is(':checked')) {
    //       iscorCheck = true; 
    //     };
    //   });
    //   return iscorCheck;
    // };
          $('form .js-valid').on('keyup', function(e) {
          
         var $proc_form = $(this).parents('form');
          // if(isFormValid($proc_form)) {
          //   $(this).parent().removeClass('error');
          //   $(this).removeClass('errorInput');
          // }
          if( $(this).val() !='' ) {
            $(this).removeClass('errorInput');
            $(this).next('span').removeClass('error-show');
          }; 
      });

    $(".js-form-template").submit(function(e) {
        e.preventDefault();
      
        var  $proc_form = $(this);
    
        if(isFormValid($proc_form)) {
            $.ajax({
            type: "GET",
            url: "mail.php",
            data: $(this).serialize()
            }).done(function() {
              $(this).find("input").val("");
              $.fancybox.open({ src: '#ok' });
              $(".js-form-template").trigger("reset");
          });
        }
        return false;
    });

});