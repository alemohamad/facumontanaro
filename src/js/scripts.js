$(document).ready(function() {
  $.getJSON('images/projects.json', function(data) {
    $('#work .container .row').html('');
    $.each(data, function(i, item) {
      var project = '<div class="col-md-6"><a href="' + item.link + '" target="_blank"class="icon-' + item.type + '" style="background-image: url(\'' + item.image + '\');"></a></div>'
      $('#work .container .row').append(project);
    });
  });
});

$(".menu-home").click(function(e) {
  e.preventDefault();
  
  $([document.documentElement, document.body]).animate({
      scrollTop: 0
  }, 700);
});

$(".menu-work").click(function(e) {
  e.preventDefault();
  
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#work").offset().top - 100
  }, 700);
});

$(".menu-about").click(function(e) {
  e.preventDefault();
  
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top + 50
  }, 700);
});

$(".menu-contact").click(function(e) {
  e.preventDefault();
  
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top + 250
  }, 700);
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 600) {
      $("#totop").addClass("display");
  } else {
      $("#totop").removeClass("display");
  }

  var workPosition = $("#work").offset().top - 100;
  var aboutPosition = $("#about").offset().top;
  var contactPosition = $("#contact").offset().top + 50;

  if (scroll >= contactPosition) {
    $('.menu-work').removeClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').addClass('active');
  } else if (scroll >= aboutPosition) {
    $('.menu-work').removeClass('active');
    $('.menu-about').addClass('active');
    $('.menu-contact').removeClass('active');
  } else if (scroll >= workPosition) {
    $('.menu-work').addClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').removeClass('active');
  } else {
    $('.menu-work').removeClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').removeClass('active');
  }
});
