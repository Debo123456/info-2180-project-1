// JavaScript Document
$(document).ready(function(e) {
    $(".menu ul a").click(function(){
		$(".menu ul a").each(function(index, element) {
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
	
	$('.menu .dropdown').hover(function(){
		$('#aboutdiv').slideUp('slow');
		$('#contactdiv').slideUp('slow');
	})
	
	$('.laposthead').click(function(){
		$('.lapostbody').slideUp('slow');
		if($(this).siblings().is(':hidden'))
			{
				$(this).siblings().slideDown('slow');
			}
			else
			{
				$(this).siblings().slideUp('slow');
				$('.lapostdate').fadeIn('slow');
			}
		;})
		
		
		$('.showbutton').click(function(){
		if($('#more').is(':hidden'))
			{
				$('#more').slideDown('slow');
				$(this).text('Show Less');
			}
			else
			{
				$('#more').slideUp('slow');
				$(this).text('Show More');
			}
		;})
});
