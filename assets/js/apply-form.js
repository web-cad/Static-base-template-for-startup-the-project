function validPhoneNumber(string){
		var regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
		return regex.test(string);
	}

	$.validator.addMethod("validPhoneNumber", function(value, element) {
		return this.optional(element) || validPhoneNumber(value);
	}, "Invalid phone number");


	$('#applybrand').validate({              
		rules: {
			cnumber: {
				required: true,
				maxlength: 15,
				validPhoneNumber: true,
				minlength:9
			}
		},
		submitHandler: function () {
			$.ajax({
				url: "mail.php",
				type: "POST",
				data: $('#applybrand').serialize(),
				success: function (e) {
				
				console.log(e);
				
					if (e == 'Error' || e == 'Error2') {
						if(e == 'Error'){
							$('.notification').text('Sending failed, please try again.');}
						else {
							$('.notification').text('Sending failed, please try again.');
						}
						$('.notification').fadeIn();
						
					}
					else {
						$('.notification').text('Thank you for reaching out, someone will get back to you soon');
						$('.notification').fadeIn();
						$('#applybrand')[0].reset();
					}
				},
				error: function (e){
					$('.notification').text('Sending failed, please try again.');
					$('.notification').fadeOut();
				}
			});
			return false;

                }
	});