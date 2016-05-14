// JavaScript Document
$(document).ready(function(e) {
    $(".menu ul a").click(function(){
		
							/**************************************************************************************
											Remove selected class from nav items
							***************************************************************************************/
		$(".menu ul a").each(function(index, element) {
        	$(this).removeClass('selected');
    	});
		
							/**************************************************************************************
												Slide down about/contact container
							***************************************************************************************/
		if($(this).is('#about'))
		{
			if($('#aboutdiv').is(':hidden'))
			{
				$('div#result').slideUp('slow');
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
				$('div#result').slideUp('slow');
				$('#aboutdiv').slideUp('slow');
				$('#contactdiv').slideDown('slow');
			}
			else
			{
				$('#contactdiv').slideUp('slow');
			}
		}
								/**************************************************************************************
													Apply selected class to selected nav item
							***************************************************************************************/
		$(this).addClass("selected");
	})
	
									/**************************************************************************************
												Dropdown menu item on hover
									***************************************************************************************/
	$('.menu .dropdown').hover(function(){
		$('#aboutdiv').slideUp('slow');
		$('#contactdiv').slideUp('slow');
	})
	
								/**************************************************************************************
														Slide down information container for champion
								***************************************************************************************/
	function championinfo(name){
		
		$.post('inc/championinfo.php', {name:name}, function(data){
			if($('div.freechampioninfo').is(':hidden'))
			{
				$('div.freechampioninfo').slideDown('slow');
				$('div#infohere').html(data);
			}
			else
			{
				$('div#infohere').html(data);
			}
		});
	}
	
	$('.freechampionsbody img').click(function(){
		championinfo($(this).attr('id'));
	});
	


							/**************************************************************************************
											Close current slide down container
							***************************************************************************************/	
	$('.close').click(function(){
		var $close_me = $(this).parent();
		$close_me.slideUp('slow');
	});
	
							/**************************************************************************************
											Slide down article when title is clicked
							***************************************************************************************/
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
		
		
							/**************************************************************************************
											show more video information (Show more button click)
							***************************************************************************************/
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
		
						/**************************************************************************************
											post search query, slide down result container with results
						***************************************************************************************/
		$(document).on("keyup", 'input#search', function(){
		$search = $(this).val();
		if($search != ""){
			
			$.post('inc/search.php', {query:$search}, function(data)
			{
				$('#contactdiv').slideUp('slow');
				$('#aboutdiv').slideUp('slow');
				$('div#result').slideDown('slow');
				$('div#results').html(data);
						
			});
			
		}
		else{
			$('div#result').slideUp('slow');
		}
	});
});
