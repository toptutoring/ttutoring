// Landlord sign-up form javascript
function LandlordSignUp() {

  $( "#landlord-sign-up" ).submit(function( event ) {

    // Stop form from submitting
    event.preventDefault();

    // Get values from sign-up form
    var $name = $('#land-first-name').val() + " " + $('#land-last-name').val();
    var $email = $('#land-email').val();
    var $managed_units = $('#managed-units-count').val();
    var $password = $('#land-password').val();
    var $password_confirmation = $('#password-confirm').val();
    var $landlord = true;

    if($password != $password_confirmation) {
      // Append errors.
      $('.form-errors').html('Passwords must match!');
    }
    else {
    $.ajax({
      type: "POST",
      url: "http://app.plexmate.com/api/signups",
      headers: {
      'api_application_key':'CVvMQ4ZU5FCRuSMzeM7c'
      },
      data: { user: { name: $name, email: $email, password: $password , landlord: $landlord} },
      success: function(response) {
        // Submit message.
        $('.sign-up-container').html('<h2>Thank you!</h2><p>Your account has been created.</p><a class="btn btn-filled btn-lg mb32 mt-xs-40" href="http://app.plexmate.com/sign_in">Login</a>');
      },
      error: function(XMLHttpRequest, textStatus) {
        // Append errors.
        $('.form-errors').html(XMLHttpRequest.responseText);
      }
    });
  }
  });
}
