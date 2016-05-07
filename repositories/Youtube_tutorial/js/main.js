// JavaScript Document
$(document).ready(function(e) {
    $("nav ul a").click(function(){
		$("nav ul a").each(function(index, element) {
        	$(this).removeClass('selected');
    	});
		if($(this).is('#about'))
		{
			if($('#aboutdiv').is(':hidden'))
			{
				$('#contactdiv').slideUp('slow');
				$('#aboutdiv').slideDown('slow');
			}
			else
			{
				$('#aboutdiv').slideUp('slow');
			}
		}
		else if($(this).is('#contact'))
		{
			if($('#contactdiv').is(':hidden'))
			{
				$('#aboutdiv').slideUp('slow');
				$('#contactdiv').slideDown('slow');
			}
			else
			{
				$('#contactdiv').slideUp('slow');
			}
		}
		$(this).addClass("selected");
	})
});
