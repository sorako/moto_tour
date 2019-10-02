 // EMAIL BURTGEJ BGA HESEG
$(document).ready(function(){
  $.fn.serializeObject = function()
    {
     var o = {};
     var a = this.serializeArray();
     $.each(a, function() {
         if (o[this.name]) {
             if (!o[this.name].push) {
                 o[this.name] = [o[this.name]];
             }
             o[this.name].push(this.value || '');
         } else {
             o[this.name] = this.value || '';
         }
     });
     return o;
    };
  var form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxEV5VQyZJ-b3UduuPMmqp--alp5fwqxAzDUNwJ1f4y41K4kmuM/exec';
    form.submit(function(e){
      e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: form.serializeObject()
    });
      $(".thanks").html("登録しました。ありがとうございます。").css("font-size","1rem");
      $(".form-control").remove();
      $("#submit").remove();
    });
 });
// BACK TO TOP BTN
  $(document).ready(function() {
      var offset = 220;
      var duration = 500;
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.back-to-top').fadeIn(duration);
          } else {
              jQuery('.back-to-top').fadeOut(duration);
          }
      });
      
      jQuery('.back-to-top').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      })
  });
   $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var divam = 1.2;
      $(".sky").css({
        "top":scrollTop/divam+"px",
        "height":10000-(Math.round(scrollTop/divam))+"px"
      });
  });
   // parallax
   (function ($) {
        "use strict";

        $('.card2').each(function () {
            
            var $el = $(this);
            
            $(window).scroll(function () {
                updateBackground($el);
            });
            updateBackground($el);
        });

    }(jQuery));

    var speed = 0.4;

    function updateBackground($el) {

        var diff = $(window).scrollTop() - $el.offset().top;
        var yPos = -(diff * speed);

        var coords = '50% ' + yPos + 'px';

        $el.css({
            backgroundPosition: coords
        });
    }
// IMAGE ZOOM 
HesGallery.setOptions({
    disableScrolling: false,
    hostedStyles: false,
    animations: true,

    showImageCount: true,
    wrapAround: true
});
// DROPDOWN MENU SCRIPT -->

  jQuery(document).ready(function () {
    jQuery('.has-drop-down-a').hover(

    function () {
        jQuery(this).children('.drop').slideDown(200);
    },

    function () {
        jQuery(this).children('.drop').slideUp(200);
    });
  });
  // PHOTO SIZE
   function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
  }
