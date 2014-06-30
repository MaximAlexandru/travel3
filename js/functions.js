function populate(id){
	string="category_id="+id;
	$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
               	$('.category-name').append(response[0]);
            	$('.category-tagline').append(response[1]);
            	$('.category-description').append(response[2]);
            	$('.category-locations').append(response[3]);
            	$.unblockUI();
            	init();
            	
		  }
		});
}
function GetURLParameter(sParam)
	{
	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++)
	    {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam)
	        {
	            return sParameterName[1];
	        }
	    }
}

function reload_location(text){
	$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
		string="location_name="+text;
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "text",
            data:  string,
            success:function(response){
            	$('.location-content').empty().append(response);
            	$.unblockUI();
            	
		  }
		});
	
	
}
