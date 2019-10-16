// HEADER POPUP
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// EMAIL BURTGEJ BGA HESEG
$(document).ready(function(){
$.fn.serializeObject = function(){
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
    $(".thanks").html("サインアップしていただきありがとうございます。 電子メールの受信トレイで、新しい電子メールサブスクリプションの確認を確認してください。").css("font-size","1rem");
    $(".form-control").remove();
    $(".form-control1").remove();
    $("#submit").remove();
  });
});
// EMAIL BURTGEJ BGA HESEG
$(document).ready(function(){
$.fn.serializeObject = function(){
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
var form = $('form#test-form1'),
  url = 'https://script.google.com/macros/s/AKfycbxEV5VQyZJ-b3UduuPMmqp--alp5fwqxAzDUNwJ1f4y41K4kmuM/exec';
  form.submit(function(e){
    e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject()
  });
    $(".thanks").html("サインアップしていただきありがとうございます。 電子メールの受信トレイで、新しい電子メールサブスクリプションの確認を確認してください。").css("font-size","1rem");
    $(".form-control").remove();
    $(".form-control1").remove();
    $("#submit").remove();
  });
});

//QAA like burtgej bga heseg 
$(document).ready(function(){
  $.fn.serializeObject = function(){
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
var form = $('form#like-form'),
  url = 'https://script.google.com/macros/s/AKfycbxGE-_-ukYv6GJCbTCGMhbiolY8DXHBBv2uClRc0_ztDMfIfmJR/exec';
  form.submit(function(e){
    e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject()
  });
   setInterval(function() {
       cache_clear()
     },1300);
    function cache_clear() {
     window.location.reload(true);
    }
  });
});

//QAA dislike burtgej bga heseg 
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
var form = $('form#dislike-form'),
  url = 'https://script.google.com/macros/s/AKfycbxGE-_-ukYv6GJCbTCGMhbiolY8DXHBBv2uClRc0_ztDMfIfmJR/exec';
  form.submit(function(e){
    e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject()
  });
    setInterval(function() {
       cache_clear()
     },1300);
    function cache_clear() {
     window.location.reload(true);
    }
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
var speed = 0.4;
function updateBackground($el) {
  var diff = $(window).scrollTop() - $el.offset().top;
  var yPos = -(diff * speed);
  var coords = '50% ' + yPos + 'px';
  $el.css({
      backgroundPosition: coords
  });
}


// scoll with bg image move 
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

