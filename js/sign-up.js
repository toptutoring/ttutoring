// User sign-up form javascript
function SignUp() {

  $( "#user-sign-up" ).submit(function( event ) {

      // Stop form from submitting
      event.preventDefault();

      // Get values from sign-up form
      var $name = $('#first-name').val() + " " + $('#last-name').val();
      var $email = $('#email').val();
      var $password = $('#password').val();
      var $password_confirmation = $('#password-confirm').val();
      var $academic_type = $('select#academic-type').val();

      if($password != $password_confirmation) {
        // Append errors.
        $('.form-errors').html('Passwords must match!');
      }
      else {
      $.ajax({
        type: "POST",
        url: "http://app.toptutoring.com/api/signups/users",
        headers: {
        'api_application_key':'CVvMQ4ZU5FCRuSMzeM7c',
        'Access-Control-Allow-Origin': '*',
        },
        data: { user: { name: $name, email: $email, password: $password , student_attributes: { academic_type: $academic_type } } },
        success: function(response) {
          // Submit message.
          $('.sign-up-container').html('<h3>Your account has been created.</h3><a class="btn btn-lg mb32 mt-xs-40" href="http://app.toptutoring.com/sign_in">Login</a>');
        },
        error: function(XMLHttpRequest, textStatus) {
          // Append errors.
          $('.form-errors').html(XMLHttpRequest.responseText);
        }
      });
    }
  });

  $( "#tutor-sign-up" ).submit(function( event ) {

      // Stop form from submitting
      event.preventDefault();

      // Get values from sign-up form
      var $name = $('#first-name').val() + " " + $('#last-name').val();
      var $email = $('#email').val();
      var $password = $('#password').val();
      var $password_confirmation = $('#password-confirm').val();
      var $academic_type = $('select#academic-type').val();

      if($password != $password_confirmation) {
        // Append errors.
        $('.form-errors').html('Passwords must match!');
      }
      else {
        $.ajax({
          type: "POST",
          url: "http://app.toptutoring.com/api/signups/tutors",
          headers: {
          'api_application_key':'CVvMQ4ZU5FCRuSMzeM7c',
          'Access-Control-Allow-Origin': '*',
          },
          data: { user: { name: $name, email: $email, password: $password , tutor_attributes: { academic_type: $academic_type } } },
          success: function(response) {
            // Submit message.
            $('.sign-up-container').html('<h3>Your account has been created.</h3><a class="btn btn-lg mb32 mt-xs-40" href="http://app.toptutoring.com/sign_in">Login</a>');
          },
          error: function(XMLHttpRequest, textStatus) {
            // Append errors.
            $('.form-errors').html(XMLHttpRequest.responseText);
          }
        });
      }
    });
}