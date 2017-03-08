$(function() {
  $('#send-form').click(function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      sendForm();
    } else {
      showNotice('Sorry. It seems like Form was filled with bad data.', 'alert');
    }
  });
});

function validateForm() {
  var pattern = /.*@.*/;
  
  $('#contact-form input, textarea').each(function() {
    if (this.value == '') { return false; }
  });
  
  if (!pattern.test($('#guest-email').val())) { return false; }
  
  return true;
}

function sendForm() {
  $.ajax({
    url: '//formspree.io/illia@ukr.net', 
    method: 'POST',
    data: {
      guestName:    $('#guest-name').val(),
      guestEmail:   $('#guest-email').val(),
      guestMessage: $('#guest-message').val()
    },
    dataType: 'json',
    success: sendFormSuccess,
    error: sendFormError
  });
}

function sendFormError() {
  showNotice('Something went wrong on the Server. Just use an email.', 'alert');
}

function sendFormSuccess() {
  showNotice('Thanks. I will reply ASAP!', 'success')
  document.getElementById('contact-form').reset();
}

function showNotice(text, className) {
  $('#notice').removeClass();
  $('#notice').html(text).addClass('notice ' + className).fadeIn();
  
  setTimeout(function() {
    $('#notice').fadeOut();
  }, 3000);
}