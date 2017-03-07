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
    animateOnScrollTo($('.levels'), $('.level-circle'), 'rubberBand');
    animateOnScrollTo($('.portfolio'), $('.work-item'), 'zoomIn');
  });
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