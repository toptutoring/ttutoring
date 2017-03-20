jQuery(function($) {
	$('.contact-us-form').submit(function(event) {
		window.Intercom("trackEvent", "contact_submision", {
			"name": $('.contact-us-form .name').val(),
			"email": $('.contact-us-form .email').val(),
			"subject": $('.contact-us-form .subject').val(),
			"message": $('.contact-us-form .message').val(),
		});
	});
});
