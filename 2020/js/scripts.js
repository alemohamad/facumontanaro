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

  if (scroll >= 600) {
      $("#totop").addClass("display");
  } else {
      $("#totop").removeClass("display");
  }

  var projectsPosition = $("#projects").offset().top - 120;
  var aboutPosition = $("#about").offset().top - 120;
  var contactPosition = $("#contact").offset().top - 220;

  if (scroll >= contactPosition) {
    $('.menu-projects').removeClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').addClass('active');
  } else if (scroll >= aboutPosition) {
    $('.menu-projects').removeClass('active');
    $('.menu-about').addClass('active');
    $('.menu-contact').removeClass('active');
  } else if (scroll >= projectsPosition) {
    $('.menu-projects').addClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').removeClass('active');
  } else {
    $('.menu-projects').removeClass('active');
    $('.menu-about').removeClass('active');
    $('.menu-contact').removeClass('active');
  }
});
