<script>
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
	
	$('#close').click(function(){
		$('div.freechampioninfo').slideUp('slow');
	});
</script>
	



</body>
</html>