$(document).ready(function() {
    
	// Change element class on hover
    $('ul.navbar-nav li a').hover(function(){
       $(this).addClass('active'); 
    },
    function(){
        $(this).removeClass('active');
    });

	// Process contact form
    $('form.contact-form').submit(function(event){
		// Prevent default behavior
		event.preventDefault();

		var errors = '';
		var data = '';
		$('form.contact-form :input:not([type="submit"])').each(function(){
			
			// Process empty fields
		    if($(this).val() === ""){
				errors += this.id + " is required" + "\n";			
			}
			else {
				// if there is no empty fields, then record input data.
				data += this.value + "\n";				
			}

		});
		
		// Show result, if there are errors, we have to display them. Otherwise display form data.
		if(errors){
			alert(errors);
		} else {
			alert(data);
		}

    });

	// Change color of button on click
	$( "div.feature-content a.green-btn").click(function() {
		event.preventDefault();
		$(this).css('color', 'red');
		$(this).css('background', '#FFF');
	});	

	// Redirect to Facebook on button click
	$( "div.feature-content a.blue-btn").click(function() {
		event.preventDefault();
		window.location.replace("https://www.facebook.com/jan.metlitski");
	});		
	
}); 