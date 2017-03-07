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
});

function toggleMenu(){
  $( window ).width() > 768 ? $('nav').show() : $('nav').hide();
}