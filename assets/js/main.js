$(function(){
  $( window ).resize(function() {
    toggleMenu();
  });
  
  $('#hamburger-menu').click(function(){
    $('nav').toggle();
  });
  
  $('.menu-item').click(function(){
    if ($( window ).width() < 768) { $('nav').toggle(); }
  });
  
  $(window).scroll(function() {
    animateOnScrollTo($('#about'), $('.level-circle'), 'flipInX');
    animateOnScrollTo($('.portfolio'), $('.work-item'), 'zoomIn');
  });
  
  makePhone();
  makeEmail();
});

function toggleMenu(){
  $( window ).width() > 768 ? $('nav').show() : $('nav').hide();
}
  
function animateOnScrollTo(scrollTo, animateElement, animation) {
  if ($( window ).width() < 768) { return; }
  
  var hT = scrollTo.offset().top,
      hH = scrollTo.outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)) { animateElement.addClass('animated ' + animation); }
}

function makePhone() {
  $('#my-phone').html(['+38', '093', '727', '82', '35'].join(' '));
  return;
}

function makeEmail() {
  $('#my-email').html(['gmail.com', '@', 'illia.kuzma'].reverse().join(''));
  return;
}