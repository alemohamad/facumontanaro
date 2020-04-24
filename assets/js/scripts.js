$(".menu-home").click(function(e) {
  e.preventDefault();

  $([document.documentElement, document.body]).animate({
      scrollTop: 0
  }, 700);
});

$(".menu-projects").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
      scrollTop: $("#projects").offset().top - 100
  }, 700);
});

$(".menu-about").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
      scrollTop: $("#about").offset().top - 100
  }, 700);
});

$(".menu-contact").click(function(e) {
  e.preventDefault();

  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 700);
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  var projectsPosition = $("#projects").offset().top - 120;
  var aboutPosition = $("#about").offset().top - 120;
  var contactPosition = $("#contact").offset().top - 220;

  if (scroll >= contactPosition) {
    $('.menu-projects').parent().removeClass('active');
    $('.menu-about').parent().removeClass('active');
    $('.menu-contact').parent().addClass('active');
  } else if (scroll >= aboutPosition) {
    $('.menu-projects').parent().removeClass('active');
    $('.menu-about').parent().addClass('active');
    $('.menu-contact').parent().removeClass('active');
  } else if (scroll >= projectsPosition) {
    $('.menu-projects').parent().addClass('active');
    $('.menu-about').parent().removeClass('active');
    $('.menu-contact').parent().removeClass('active');
  } else {
    $('.menu-projects').parent().removeClass('active');
    $('.menu-about').parent().removeClass('active');
    $('.menu-contact').parent().removeClass('active');
  }
});
