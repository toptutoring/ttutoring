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
    var $landlord = true;

    // Send the data using post
    $.ajax({
      type: "POST",
      url: "http://app.plexmate.com/api/signups",
      data: { user: { name: $name, email: $email, password: $password , landlord: $landlord} },
    });

    // Submit message
    $('.sign-up-container').html("<h2>Thank you!</h2><p>An account has been created.</p>");

  });
}
