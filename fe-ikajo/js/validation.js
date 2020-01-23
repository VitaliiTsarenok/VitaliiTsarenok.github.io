$(document).ready(function() {
 
	$("#feedback").validate({
		rules: {
			yourname: {
				required: true,
				minlength: 2
				}, 
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 2
				}, 
		},
		submitHandler: function(form) {

			$.fn.extend({
				qcss: function(css) {
				  return $(this).queue(function(next) {
					$(this).css(css);
					next();
				  });
				}
			  });
			  
			
			$("input[name='yourname']").val('');
			$("input[name='email']").val('');
			$("textarea[name='message']").val('');
			$(form).css({'opacity':'0', 'transform':'scale(0)'}).delay( 3000 ).qcss({'opacity':'1', 'transform':'scale(1)'});
			$('.msg-send').css({'opacity':'1', 'transform':'scale(1)'}).delay( 3000 ).qcss({'opacity':'0', 'transform':'scale(0)'});
		  }
	});
})