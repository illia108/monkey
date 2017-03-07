$(function() {
  $('#send-form').click(function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      sendForm();
    } else {
      $('#notice').html('Sorry. It seems like Form was filled with bad data.').addClass('alert');
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
  $('#notice').html('Something went wrong on the Server. Just use an email.').addClass('alert');
}

function sendFormSuccess() {
  $('#notice').html('Thanks. I will reply ASAP!').addClass('success');
  document.getElementById('contact-form').reset();
}